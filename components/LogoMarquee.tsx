'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Pause, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoMarqueeProps {
  images: { src: string; alt: string }[]
}

export default function LogoMarquee({ images }: LogoMarqueeProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const duplicatedImages = [...images, ...images]

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false)
      }}
    >
      <div
        className={cn(
          'flex gap-10 w-max',
          !prefersReducedMotion && 'animate-marquee',
          (isHovered || isFocused || isPaused) && !prefersReducedMotion && 'animation-paused'
        )}
        style={
          prefersReducedMotion
            ? { flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', width: '100%' }
            : undefined
        }
      >
        {(prefersReducedMotion ? images : duplicatedImages).map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            aria-hidden={!prefersReducedMotion && i >= images.length ? true : undefined}
            className="flex items-center justify-center h-9 flex-shrink-0"
          >
            <Image
              src={img.src}
              alt={!prefersReducedMotion && i >= images.length ? '' : img.alt}
              width={140}
              height={36}
              sizes="140px"
              className="h-9 w-auto max-w-[140px] object-contain"
              priority={false}
            />
          </div>
        ))}
      </div>
      {!prefersReducedMotion && (
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10 mt-5 flex justify-end">
          <button
            type="button"
            onClick={() => setIsPaused((current) => !current)}
            aria-label={isPaused ? 'Resume logo animation' : 'Pause logo animation'}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-outline px-4 text-sm font-medium text-primary hover:bg-secondary-container"
          >
            {isPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
            {isPaused ? 'Resume' : 'Pause'}
          </button>
        </div>
      )}
    </div>
  )
}
