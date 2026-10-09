'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const pageMessages: Record<string, string> = {
  '/': 'Hello Superlan East Africa, I would like to make an inquiry about your ICT solutions and services.',
  '/about': 'Hello Superlan East Africa, I would like to learn more about your company, vision, and core values.',
  '/services': 'Hello Superlan East Africa, I am interested in your ICT solutions and would like more details.',
  '/projects': 'Hello Superlan East Africa, I would like to discuss a potential project and your delivery experience.',
  '/clients': 'Hello Superlan East Africa, I am interested in becoming a client and would like to talk about your services.',
  '/careers': 'Hello Superlan East Africa, I would like to ask about career opportunities.',
  '/news': 'Hello Superlan East Africa, I would like to inquire about your latest insights and updates.',
  '/csr': 'Hello Superlan East Africa, I would like to discuss CSR initiatives and community partnerships.',
  '/contact': 'Hello Superlan East Africa, I would like to get in touch regarding ICT support and services.',
}

const WhatsAppButton = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [hideWidget, setHideWidget] = useState(false)
  const phoneNumber = '254715398683'
  const rawMessage = pageMessages[pathname] || pageMessages['/']
  const message = encodeURIComponent(rawMessage)
  const href = `https://wa.me/${phoneNumber}?text=${message}`

  useEffect(() => {
    setOpen(false)
    const regions = document.querySelectorAll('footer, main form, [data-whatsapp-avoid]')
    const visibility = new Map<Element, boolean>()

    const updateVisibility = () => {
      const shouldHide = Array.from(visibility.values()).some(Boolean)
      setHideWidget(shouldHide)
      if (shouldHide) setOpen(false)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visibility.set(entry.target, entry.isIntersecting))
      updateVisibility()
    })

    regions.forEach((region) => {
      const bounds = region.getBoundingClientRect()
      visibility.set(region, bounds.bottom > 0 && bounds.top < window.innerHeight)
      observer.observe(region)
    })
    updateVisibility()

    return () => observer.disconnect()
  }, [pathname])

  if (hideWidget) return null

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 md:bottom-6 md:right-6">
      {open && (
        <div className="mb-4 w-[min(20rem,calc(100vw-2rem))] max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl bg-on-secondary-container text-white shadow-xl">
          <div className="flex items-start justify-between p-5">
            <div>
              <p className="text-base font-semibold">Do you have any inquiries or need assistance?</p>
              <p className="mt-1 text-sm text-emerald-50">{rawMessage}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="ml-3 mt-0.5 text-emerald-100 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="px-5 pb-5">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-white px-4 py-3 text-emerald-700 hover:bg-emerald-50"
            >
              <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45 4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="font-medium">WhatsApp Us</span>
            </a>
            <p className="mt-2 flex items-center text-xs text-emerald-50">
              Send a message to our team
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="relative ml-auto flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:scale-110 hover:bg-emerald-700 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] active:scale-95 transition-all duration-200 animate-float"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-600/40 animate-pulse-ring pointer-events-none" aria-hidden="true" />
        <svg viewBox="0 0 24 24" className="w-7 h-7 relative z-10" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45 4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </div>
  )
}

export default WhatsAppButton
