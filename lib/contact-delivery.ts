import nodemailer from 'nodemailer'
import type { ContactData } from './contact-validation'

function smtpConfig() {
  const { SMTP_HOST: host, SMTP_USER: user, SMTP_PASSWORD: pass, CONTACT_FROM: from, CONTACT_TO: to } = process.env
  const port = Number(process.env.SMTP_PORT || 465)
  const mailbox = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/
  if (!host || !user || !pass || !from || !to || ![465, 587].includes(port) || !mailbox.test(from) || !mailbox.test(to)) return null
  return { host, port, user, pass, from, to }
}

export function contactDeliveryReady() {
  return Boolean(smtpConfig() && process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
}

export async function deliverContact(data: ContactData) {
  const config = smtpConfig()
  if (!config) throw new Error('Email configuration unavailable')
  const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    requireTLS: true,
    auth: { user: config.user, pass: config.pass },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 10000,
    dnsTimeout: 8000,
    disableFileAccess: true,
    disableUrlAccess: true,
    logger: false,
    debug: false,
  })
  try {
    const result = await transport.sendMail({
      from: { name: 'Superlan Website', address: config.from },
      to: config.to,
      replyTo: { name: data.name, address: data.email },
      subject: `Website enquiry: ${data.subject}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nSubject: ${data.subject}\n\n${data.message}`,
    })
    if (!result.accepted.length || result.rejected.length) throw new Error('Email was not accepted')
  } finally {
    transport.close()
  }
}
