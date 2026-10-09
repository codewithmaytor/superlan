'use client'

import { useState, useEffect, type KeyboardEvent } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react'
import { featuredClients } from '@/lib/clients-data'

export default function FeaturedPartner() {
  const [startIndex, setStartIndex] = useState(0)
  const [perView, setPerView] = useState(1)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(true)
  const [pageHidden, setPageHidden] = useState(false)
  const lastIndex = Math.max(0, featuredClients.length - perView)
  const activeIndex = Math.min(startIndex, lastIndex)
  const rotating = !paused && !hovered && !focused && !reducedMotion && !pageHidden

  useEffect(() => {
    const tablet = window.matchMedia('(min-width: 640px)')
    const desktop = window.matchMedia('(min-width: 1024px)')
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      const count = desktop.matches ? 3 : tablet.matches ? 2 : 1
      setPerView(count)
      setStartIndex((current) => Math.min(current, Math.max(0, featuredClients.length - count)))
      setReducedMotion(motion.matches)
    }
    const updateVisibility = () => setPageHidden(document.hidden)
    update()
    updateVisibility()
    tablet.addEventListener('change', update)
    desktop.addEventListener('change', update)
    motion.addEventListener('change', update)
    document.addEventListener('visibilitychange', updateVisibility)
    return () => {
      tablet.removeEventListener('change', update)
      desktop.removeEventListener('change', update)
      motion.removeEventListener('change', update)
      document.removeEventListener('visibilitychange', updateVisibility)
    }
  }, [])

  useEffect(() => {
    if (!rotating || lastIndex === 0) return
    const timer = window.setInterval(() => {
      setStartIndex((current) => current >= lastIndex ? 0 : Math.min(current + perView, lastIndex))
    }, 6000)
    return () => window.clearInterval(timer)
  }, [rotating, lastIndex, perView])

  const move = (direction: -1 | 1) => {
    setPaused(true)
    setStartIndex((current) => {
      if (direction === 1) return current >= lastIndex ? 0 : Math.min(current + perView, lastIndex)
      return current <= 0 ? lastIndex : Math.max(0, current - perView)
    })
  }

  const handleKeys = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.preventDefault()
    move(event.key === 'ArrowLeft' ? -1 : 1)
  }

  return (
    <section
      aria-labelledby="featured-clients-title"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false)
      }}
      onKeyDown={handleKeys}
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="featured-clients-title" className="text-[clamp(24px,4vw,32px)] font-medium text-foreground">
            Featured Clients
          </h2>
          <p className="mt-2 text-base text-on-surface-variant">Organizations across the sectors we serve.</p>
        </div>
        <div className="flex items-center gap-2" aria-label="Carousel controls" role="group">
          {!reducedMotion && (
            <button
              type="button"
              onClick={() => setPaused((current) => !current)}
              aria-label={paused ? 'Resume client rotation' : 'Pause client rotation'}
              aria-controls="featured-clients-track"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-outline px-4 text-sm font-medium text-primary hover:bg-secondary-container"
            >
              {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
              {paused ? 'Resume' : 'Pause'}
            </button>
          )}
          <button type="button" onClick={() => move(-1)} aria-label="Previous clients" aria-controls="featured-clients-track" className="flex h-11 w-11 items-center justify-center rounded-full border border-outline text-primary hover:bg-secondary-container">
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next clients" aria-controls="featured-clients-track" className="flex h-11 w-11 items-center justify-center rounded-full border border-outline text-primary hover:bg-secondary-container">
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden [--clients-per-view:1] sm:[--clients-per-view:2] lg:[--clients-per-view:3]">
        <div
          id="featured-clients-track"
          className="flex transition-transform duration-500 motion-reduce:transition-none"
          style={{ transform: `translateX(calc(-${activeIndex} * 100% / var(--clients-per-view)))` }}
        >
          {featuredClients.map((client, index) => (
            <div
              key={client.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${featuredClients.length}`}
              aria-hidden={index < activeIndex || index >= activeIndex + perView}
              className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/3"
            >
              <div className="flex min-h-[220px] flex-col items-center justify-center rounded-large border border-outline/25 bg-background px-5 py-8 text-center">
                <Image src={client.logo} alt="" width={220} height={64} sizes="220px" className="mb-6 h-16 w-auto max-w-[min(220px,100%)] object-contain" />
                <h3 className="text-xl font-medium text-foreground">{client.name}</h3>
                <p className="mt-2 text-sm text-on-surface-variant">{client.sector}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-5 text-sm text-on-surface-variant" aria-live={rotating ? 'off' : 'polite'} aria-atomic="true">
        Showing {activeIndex + 1}-{Math.min(activeIndex + perView, featuredClients.length)} of {featuredClients.length} clients
      </p>
    </section>
  )
}
