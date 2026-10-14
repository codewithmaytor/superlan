import { pageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import FeaturedPartner from '@/components/FeaturedPartner'
import LogoWall from '@/components/LogoWall'
import SlimPageHeader from '@/components/SlimPageHeader'
import Section from '@/components/Section'
import { selectedPastClients } from '@/lib/company-profile'

export const metadata = pageMetadata('/clients', 'Clients & Sectors Served | Superlan East Africa Limited', 'Explore the clients and sectors featured by Superlan East Africa Limited, including government, education and finance. Discuss relevant ICT experience with us.')

export default function ClientsPage() {
  return (
    <>
      <SlimPageHeader
        title="Our Clients"
        subtitle="Trusted by organizations across government, education, finance, healthcare, and beyond."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Clients' },
        ]}
      />

      <Section tone="tinted" tightTop>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <FeaturedPartner />
        </div>
      </Section>

      <Section tone="default">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <LogoWall />
        </div>
      </Section>

      <Section tone="tinted">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-6">
            Selected Past Clients
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedPastClients.map((client) => (
              <li key={client} className="min-w-0 p-6 rounded-large bg-background border border-outline/25">
                <p className="text-lg font-medium text-primary leading-relaxed">{client}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div
          className="absolute w-[300px] h-[300px] bg-tertiary rounded-full blur-[80px] opacity-20 pointer-events-none z-0"
          style={{ top: '-60px', right: '-40px' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-8 lg:px-10 py-16 md:py-20 text-center">
          <h2 className="text-[clamp(32px,5vw,48px)] font-medium mb-4">Ready to Work With Us?</h2>
          <p className="text-lg opacity-90 max-w-[640px] mx-auto mb-8 leading-relaxed">
             Let&apos;s discuss how our expertise can help you achieve your strategic goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium bg-white text-primary rounded-large hover:bg-white/90 active:bg-white/80 transition-colors duration-200"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium border border-white/40 text-white rounded-large hover:bg-white/10 active:bg-white/20 transition-colors duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
