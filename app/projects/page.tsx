import Link from 'next/link'
import { pageMetadata } from '@/lib/metadata'
import { selectedPastClients } from '@/lib/company-profile'
import { siteConfig } from '@/lib/site-config'
import SlimPageHeader from '@/components/SlimPageHeader'
import Section from '@/components/Section'
import DeliveryProcess from '@/components/DeliveryProcess'

export const metadata = pageMetadata('/projects', 'Projects - Superlan East Africa Limited', 'Discuss ICT project requirements and explore the sectors served by Superlan East Africa Limited.')
const sectors = ['Government Institutions', 'Educational Institutions', 'Financial Organizations', 'Healthcare Facilities', 'NGOs', 'Corporate Organizations', 'Small and Medium Enterprises']
export default function ProjectsPage() {
  return <>
    <SlimPageHeader title="Our Projects" subtitle="Technology delivery built around your requirements, from initial scope to implementation and support." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]} />
    <Section tone="default" tightTop>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
        <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-6 text-center">Sectors We Serve</h2>
        <div className="flex flex-wrap gap-3 justify-center">{sectors.map(sector => <span key={sector} className="px-4 py-2 rounded-full text-base font-medium bg-secondary-container text-on-secondary-container">{sector}</span>)}</div>
      </div>
    </Section>
    <Section tone="tinted">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-5">Selected Past Clients</h2>
          <p className="text-base text-on-surface-variant mb-6 leading-relaxed">Our company profile lists these organizations among our selected past clients.</p>
          <ul className="divide-y divide-outline/30">{selectedPastClients.map(client => <li key={client} className="py-4 text-lg font-medium text-primary">{client}</li>)}</ul>
          <a href={siteConfig.companyProfile} className="inline-flex items-center min-h-11 text-primary underline mt-4" download>Download our company profile (PDF)</a>
        </div>
        <div className="rounded-large bg-background border border-outline/30 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-primary mb-5">Let’s discuss your project</h2>
          <p className="text-base text-on-surface-variant leading-relaxed mb-6">Tell us about the systems, locations and teams involved, the outcome you need, and your intended timeline. We can discuss the scope and relevant experience with you.</p>
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-large">Start a project conversation</Link>
          <Link href="/news/planning-your-ict-project" className="flex items-center min-h-11 mt-4 text-primary underline">Read our project brief guide</Link>
        </div>
      </div>
    </Section>
    <DeliveryProcess />
  </>
}
