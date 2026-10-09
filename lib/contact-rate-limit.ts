import { createHash } from 'node:crypto'
import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

let limiters: { email: Ratelimit; global: Ratelimit } | undefined

export async function checkContactLimit(email: string) {
  if (!limiters) {
    const redis = Redis.fromEnv()
    limiters = {
      email: new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(3, '10 m'), prefix: 'superlan:contact:email', analytics: false, timeout: 2000 }),
      global: new Ratelimit({ redis, limiter: Ratelimit.slidingWindow(30, '10 m'), prefix: 'superlan:contact:global', analytics: false, timeout: 2000 }),
    }
  }
  // Avoid putting visitors' addresses in Redis keys. Counters expire automatically.
  const key = createHash('sha256').update(email.toLowerCase()).digest('hex')
  const results = await Promise.all([limiters.email.limit(key), limiters.global.limit('all')])
  // Upstash may allow on timeout; do not send email when protection is unavailable.
  if (results.some(result => result.reason === 'timeout')) throw new Error('Rate limiting unavailable')
  return {
    success: results.every(result => result.success),
    retryAfter: Math.max(1, Math.ceil((Math.max(...results.map(result => result.reset)) - Date.now()) / 1000)),
  }
}
