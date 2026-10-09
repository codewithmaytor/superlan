const maximumBodyBytes = 16 * 1024

export class ContactRequestError extends Error {
  constructor(public status: number, message: string) {
    super(message)
  }
}

export async function readContactRequest(request: Request): Promise<unknown> {
  if (request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !== 'application/json') {
    throw new ContactRequestError(415, 'Use a JSON request.')
  }
  if (!request.body) throw new ContactRequestError(400, 'Invalid request.')

  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let total = 0
  try {
    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      total += value.byteLength
      if (total > maximumBodyBytes) {
        await reader.cancel()
        throw new ContactRequestError(413, 'Request is too large.')
      }
      chunks.push(value)
    }
  } finally {
    reader.releaseLock()
  }

  const bytes = new Uint8Array(total)
  let offset = 0
  for (const chunk of chunks) {
    bytes.set(chunk, offset)
    offset += chunk.byteLength
  }
  try {
    return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)) as unknown
  } catch {
    throw new ContactRequestError(400, 'Invalid request.')
  }
}
