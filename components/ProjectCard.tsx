import React from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  sector: string
  title: string
  description: string
  image?: string
}

export default function ProjectCard({ sector, title, description, image }: ProjectCardProps) {
  return (
    <div className="flex items-center gap-5 border-b border-outline/25 last:border-b-0 py-5">
      {image ? (
        <div className="w-20 h-20 rounded-m overflow-hidden flex-shrink-0">
          <Image src={image} alt={title} width={80} height={80} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-m bg-gradient-to-br from-surface-container-low to-secondary-container flex items-center justify-center flex-shrink-0 text-on-surface-variant opacity-50">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
      )}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary-container text-on-secondary-container">
            {sector}
          </span>
          <span className="text-xl font-medium text-foreground">{title}</span>
        </div>
        <p className="text-base text-on-surface-variant">{description}</p>
      </div>
    </div>
  )
}
