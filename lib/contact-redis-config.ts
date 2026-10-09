// Vercel's Upstash integration supplies KV_* names; direct Upstash setup uses
// UPSTASH_* names. Keep URL/token pairs together so credentials are not mixed.
export function contactRedisConfig() {
  const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN, KV_REST_API_URL, KV_REST_API_TOKEN } = process.env
  if (UPSTASH_REDIS_REST_URL && UPSTASH_REDIS_REST_TOKEN) {
    return { url: UPSTASH_REDIS_REST_URL, token: UPSTASH_REDIS_REST_TOKEN }
  }
  if (KV_REST_API_URL && KV_REST_API_TOKEN) {
    return { url: KV_REST_API_URL, token: KV_REST_API_TOKEN }
  }
  return null
}
