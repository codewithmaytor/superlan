'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { clientGroups } from '@/lib/clients-data'

type FilterKey = 'all' | 'county' | 'education' | 'private' | 'financial'

export default function LogoWall() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const filteredGroups =
    activeFilter === 'all'
      ? clientGroups
      : clientGroups.filter((group) => group.sector === activeFilter)

  return (
    <div>
      <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-6">Browse by Sector</h2>
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter clients by sector">
        {[
          { key: 'all', label: 'All' },
          { key: 'county', label: 'County Governments' },
          { key: 'education', label: 'Educational Institutions' },
          { key: 'private', label: 'Private Companies' },
          { key: 'financial', label: 'Financial' },
        ].map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActiveFilter(filter.key as FilterKey)}
            className={cn(
              'inline-flex min-h-11 items-center px-5 py-2 rounded-full text-base font-medium transition-colors duration-200',
              activeFilter === filter.key
                ? 'bg-primary text-on-primary border-transparent'
                : 'border border-outline text-on-surface-variant hover:bg-secondary-container hover:border-transparent'
            )}
            aria-pressed={activeFilter === filter.key}
            aria-controls="client-sector-results"
          >
            {filter.label}
          </button>
        ))}
      </div>

      <p className="sr-only" role="status">
        Showing {filteredGroups.reduce((count, group) => count + group.clients.length, 0)} clients.
      </p>
      <div id="client-sector-results" className="flex flex-col gap-10">
        {filteredGroups.map((group) => (
          <div key={group.sector} data-sector={group.sector}>
            <h3 className="text-xl font-medium text-foreground pb-3 border-b border-outline/25 mb-5">
              {group.heading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.clients.map((client) => (
                <div key={client.name} className="min-w-0 flex items-center gap-4 py-4">
                  <Image
                    src={client.logo}
                    alt=""
                    width={80}
                    height={56}
                    sizes="80px"
                    className="h-14 w-20 shrink-0 object-contain"
                  />
                  <p className="text-base font-medium text-foreground">{client.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
