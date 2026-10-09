const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const Module = require('node:module')
const ts = require('typescript')

// Compile the server TypeScript for Node's test runner and replace only network
// services. No real Redis writes or email messages occur in these tests.
const originalLoad = Module._load
let deliveryMode = 'accepted'
let limitMode = 'allowed'
let message
let transportOptions
const counters = []
Module._extensions['.ts'] = (module, file) => module._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText, file)
Module._load = function (id, parent, isMain) {
  if (id.startsWith('@/')) id = path.join(process.cwd(), id.slice(2))
  if (id === 'nodemailer') return { createTransport(options) {
    transportOptions = options
    return { async sendMail(value) {
      message = value
      if (deliveryMode === 'error') throw new Error('Private provider error')
      return { accepted: deliveryMode === 'accepted' ? [value.to] : [], rejected: deliveryMode === 'accepted' ? [] : [value.to] }
    }, close() {} }
  } }
  if (id === '@upstash/redis') return { Redis: { fromEnv: () => ({}) } }
  if (id === '@upstash/ratelimit') return { Ratelimit: class {
    static slidingWindow() { return {} }
    constructor(options) { this.prefix = options.prefix }
    async limit(key) { counters.push({ prefix: this.prefix, key }); return { success: limitMode !== 'blocked', reset: Date.now() + 60000, reason: limitMode === 'timeout' ? 'timeout' : undefined } }
  } }
  return originalLoad.call(this, id, parent, isMain)
}

const { POST } = require('../app/api/contact/route.ts')
const { contactDeliveryReady } = require('../lib/contact-delivery.ts')
const valid = { name: 'Test Visitor', email: 'visitor@example.test', phone: '', subject: 'ERP enquiry', message: 'Please discuss a new project.', website: '' }
function configured() {
  Object.assign(process.env, { SMTP_HOST: 'smtp.example.test', SMTP_PORT: '465', SMTP_USER: 'website@example.test', SMTP_PASSWORD: 'test-only', CONTACT_FROM: 'website@example.test', CONTACT_TO: 'team@example.test', UPSTASH_REDIS_REST_URL: 'https://redis.example.test', UPSTASH_REDIS_REST_TOKEN: 'test-only' })
  deliveryMode = 'accepted'; limitMode = 'allowed'; message = undefined
}
function request(body = valid, headers = {}) { return new Request('https://superlan.co.ke/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) }) }

test('unconfigured delivery returns failure without claiming success', async () => {
  configured(); delete process.env.SMTP_PASSWORD
  assert.equal(contactDeliveryReady(), false)
  const response = await POST(request())
  assert.equal(response.status, 503); assert.equal((await response.json()).success, false)
  assert.equal(message, undefined)
})
test('provider acceptance uses fixed sender/recipient and visitor reply-to', async () => {
  configured()
  const response = await POST(request())
  assert.equal(response.status, 200); assert.equal((await response.json()).success, true)
  assert.equal(message.from.address, process.env.CONTACT_FROM)
  assert.equal(message.to, process.env.CONTACT_TO)
  assert.equal(message.replyTo.address, valid.email)
  assert.match(message.text, /Not provided/)
  assert.equal(transportOptions.secure, true); assert.equal(transportOptions.requireTLS, true)
  assert.ok(counters.every(counter => !counter.key.includes(valid.email)))
})
test('STARTTLS port stays encrypted and unsupported ports keep delivery disabled', async () => {
  configured(); process.env.SMTP_PORT = '587'
  assert.equal((await POST(request())).status, 200)
  assert.equal(transportOptions.secure, false); assert.equal(transportOptions.requireTLS, true)
  process.env.SMTP_PORT = '25'; assert.equal(contactDeliveryReady(), false)
})
test('SMTP rejection or network failure never returns success or private errors', async () => {
  for (const mode of ['rejected', 'error']) {
    configured(); deliveryMode = mode
    const response = await POST(request())
    assert.equal(response.status, 503)
    const payload = await response.json()
    assert.equal(payload.success, false); assert.ok(!payload.error.includes('Private'))
  }
})
test('shared rate limit blocks delivery with retry instructions', async () => {
  configured(); limitMode = 'blocked'
  const response = await POST(request())
  assert.equal(response.status, 429); assert.ok(Number(response.headers.get('Retry-After')) > 0)
  assert.equal(message, undefined)
})
test('rate limit timeout fails closed even if the service allows a request', async () => {
  configured(); limitMode = 'timeout'
  assert.equal((await POST(request())).status, 503); assert.equal(message, undefined)
})
test('invalid fields, header injection and honeypot are rejected before email', async () => {
  for (const changed of [{ email: 'invalid' }, { subject: 'Hi\r\nBcc: attacker@example.test' }, { message: '' }, { website: 'spam.test' }]) {
    configured()
    assert.equal((await POST(request({ ...valid, ...changed }))).status, 400)
    assert.equal(message, undefined)
  }
})
test('wrong content type, oversized body, malformed JSON and foreign origin are rejected', async () => {
  configured()
  assert.equal((await POST(request(valid, { 'Content-Type': 'text/plain' }))).status, 415)
  assert.equal((await POST(request({ ...valid, message: 'a'.repeat(17000) }))).status, 413)
  assert.equal((await POST(new Request('https://superlan.co.ke/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{' }))).status, 400)
  assert.equal((await POST(request(valid, { Origin: 'https://foreign.example.test' }))).status, 403)
  assert.equal(message, undefined)
})
test('browser-facing host is accepted behind a reverse proxy', async () => {
  configured()
  const response = await POST(new Request('https://internal.example.test/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json', Host: 'preview.example.test', Origin: 'https://preview.example.test' }, body: JSON.stringify(valid) }))
  assert.equal(response.status, 200)
})
