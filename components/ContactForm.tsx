'use client'

import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { contactFields, contactLimits, getContactErrors, validateContactData, type ContactErrors } from '@/lib/contact-validation'

interface ContactFormProps {
  onSuccess?: () => void
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website: '',
  })
  const formRef = useRef<HTMLFormElement>(null)
  const [fieldErrors, setFieldErrors] = useState<ContactErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitError, setSubmitError] = useState('')

  const focusFirstError = (errors: ContactErrors) => {
    window.requestAnimationFrame(() => {
      const field = contactFields.find((name) => errors[name])
      const input = field && formRef.current?.elements.namedItem(field)
      if (input instanceof HTMLElement) input.focus()
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    setSubmitStatus('idle')
    setSubmitError('')
    const result = validateContactData(formData)
    if (!result.valid) {
      setFieldErrors(result.errors)
      focusFirstError(result.errors)
      return
    }
    setFieldErrors({})
    setIsSubmitting(true)
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 25000)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...result.data, website: formData.website }),
        signal: controller.signal,
      })
      const body: unknown = await response.json()
      const payload = body && typeof body === 'object' && !Array.isArray(body)
        ? body as Record<string, unknown>
        : {}

      if (response.ok && payload.success === true) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', website: '' })
        onSuccess?.()
      } else {
        const errors = getContactErrors(payload.errors)
        setFieldErrors(errors)
        focusFirstError(errors)
        setSubmitStatus('error')
        setSubmitError(typeof payload.error === 'string' ? payload.error : 'We could not send your message. Please try again or call us.')
      }
    } catch {
      setSubmitStatus('error')
      setSubmitError('We could not confirm delivery. Please call or WhatsApp us before resending.')
    } finally {
      window.clearTimeout(timeout)
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  return (
    <form ref={formRef} className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" maxLength={200} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            autoComplete="name"
            maxLength={contactLimits.name}
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? 'name-error' : undefined}
            className="w-full h-12 px-4 rounded-m border border-outline bg-background text-foreground placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {fieldErrors.name && <p id="name-error" className="mt-1 text-sm text-error" role="alert">{fieldErrors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            autoComplete="email"
            maxLength={contactLimits.email}
            disabled={isSubmitting}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? 'email-error' : undefined}
            className="w-full h-12 px-4 rounded-m border border-outline bg-background text-foreground placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {fieldErrors.email && <p id="email-error" className="mt-1 text-sm text-error" role="alert">{fieldErrors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+254 7XX XXX XXX"
          autoComplete="tel"
          maxLength={contactLimits.phone}
          disabled={isSubmitting}
          aria-invalid={Boolean(fieldErrors.phone)}
          aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
          className="w-full h-12 px-4 rounded-m border border-outline bg-background text-foreground placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        {fieldErrors.phone && <p id="phone-error" className="mt-1 text-sm text-error" role="alert">{fieldErrors.phone}</p>}
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help?"
          required
          maxLength={contactLimits.subject}
          disabled={isSubmitting}
          aria-invalid={Boolean(fieldErrors.subject)}
          aria-describedby={fieldErrors.subject ? 'subject-error' : undefined}
          className="w-full h-12 px-4 rounded-m border border-outline bg-background text-foreground placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        {fieldErrors.subject && <p id="subject-error" className="mt-1 text-sm text-error" role="alert">{fieldErrors.subject}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project or inquiry..."
          required
          maxLength={contactLimits.message}
          disabled={isSubmitting}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? 'message-error' : undefined}
          rows={5}
          className="w-full p-4 rounded-m border border-outline bg-background text-foreground placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
        />
        {fieldErrors.message && <p id="message-error" className="mt-1 text-sm text-error" role="alert">{fieldErrors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          'w-full h-14 px-8 text-lg font-medium bg-primary text-on-primary rounded-large hover:bg-primary-hover active:bg-primary-pressed transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none'
        )}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {submitStatus === 'success' && (
        <p className="text-on-secondary-container text-center text-sm" role="status">
          Thank you! Your message has been sent successfully.
        </p>
      )}
      {submitStatus === 'error' && (
        <p className="text-error text-center text-sm" role="alert">
          {submitError} <a href={siteConfig.phoneHref} className="underline">{siteConfig.phone}</a>
        </p>
      )}
      <p className="text-sm text-on-surface-variant">We use your details to respond to this enquiry. Please avoid sending passwords or sensitive records. <Link href="/privacy" className="text-primary underline">Privacy notice</Link>.</p>
    </form>
  )
}
