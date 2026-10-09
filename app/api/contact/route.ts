import { NextResponse } from 'next/server'
import { ContactRequestError, readContactRequest } from '@/lib/contact-request'
import { validateContactData } from '@/lib/contact-validation'
import { contactDeliveryReady, deliverContact } from '@/lib/contact-delivery'
import { checkContactLimit } from '@/lib/contact-rate-limit'
import { siteConfig } from '@/lib/site-config'

export const runtime = 'nodejs'
export const maxDuration = 30

export async function POST(request: Request) {
  try {
    const origin = request.headers.get('origin')
    // Next's internal request URL can differ from the browser-facing host behind
    // a proxy. Use the incoming Host too, so local and Vercel preview forms work.
    const host = request.headers.get('host') || new URL(request.url).host
    const allowedOrigins = [siteConfig.url, new URL(request.url).origin, `https://${host}`, `http://${host}`]
    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json({ success: false, error: 'Invalid request origin.' }, { status: 403 })
    }
    const body = await readContactRequest(request)

    if (body && typeof body === 'object' && !Array.isArray(body)) {
      const website = (body as Record<string, unknown>).website
      if (website !== undefined && (typeof website !== 'string' || website.trim())) {
        return NextResponse.json({ success: false, error: 'Invalid request.' }, { status: 400 })
      }
    }

    const result = validateContactData(body)
    if (!result.valid) {
      return NextResponse.json(
        { success: false, error: 'Check the form fields.', errors: result.errors },
        { status: 400 }
      )
    }

    if (!contactDeliveryReady()) {
      return NextResponse.json({ success: false, error: 'Please call or WhatsApp us to discuss your enquiry.' }, { status: 503 })
    }
    const limit = await checkContactLimit(result.data.email)
    if (!limit.success) {
      return NextResponse.json({ success: false, error: 'Please wait before sending another message, or call us.' }, { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } })
    }
    await deliverContact(result.data)
    return NextResponse.json({ success: true }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof ContactRequestError ? error.message : 'We could not send your message. Please call or WhatsApp us.' },
      { status: error instanceof ContactRequestError ? error.status : 503 }
    )
  }
}
