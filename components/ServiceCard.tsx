import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  chips?: string[]
  featured?: boolean
  image?: string
}

const iconMap: Record<string, React.ReactNode> = {
  Monitor: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  Code2: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  Server: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  GitMerge: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M6 21V9a9 9 0 0 0 9 9" />
    </svg>
  ),
  Cloud: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  Briefcase: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  LifeBuoy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
    </svg>
  ),
  Camera: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  Zap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Package: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16.5 9.4 7.55 4.24" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.29 7 12 12 20.71 7" />
      <line x1="12" y1="22" x2="12" y2="12" />
    </svg>
  ),
  GraduationCap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
}

export default function ServiceCard({ icon, title, description, chips, featured, image }: ServiceCardProps) {
  const iconNode = iconMap[icon] || null

  return (
    <div
      className={cn(
        'rounded-large',
        featured
          ? 'bg-surface-container p-8'
          : 'border-b border-outline/40 py-8 first:border-t'
      )}
    >
      <div className={cn('flex gap-4 items-start', featured ? 'flex-col' : 'flex-wrap')}>
        {image && (
          <div className="flex-shrink-0 w-20 h-20 rounded-m overflow-hidden">
            <Image src={image} alt={title} width={80} height={80} className="w-full h-full object-cover" />
          </div>
        )}
        {!image && (
          <div
            className={cn(
              'flex-shrink-0 flex items-center justify-center rounded-full w-12 h-12',
              featured ? 'bg-tertiary/10 text-tertiary' : 'bg-secondary-container text-on-secondary-container'
            )}
          >
            {iconNode}
          </div>
        )}
        <div className={cn('flex-1 min-w-0', featured && 'w-full')}>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3
              className={cn(
                'font-medium',
                featured ? 'text-2xl text-primary' : 'text-xl text-foreground'
              )}
            >
              {title}
            </h3>
            {featured && (
              <span data-whatsapp-avoid className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-tertiary text-on-tertiary">
                Flagship
              </span>
            )}
          </div>
          <p className="text-base text-on-surface-variant mb-3">
            {description}
          </p>
          {chips && chips.length > 0 && (
            <div data-whatsapp-avoid className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-outline text-on-surface-variant"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
