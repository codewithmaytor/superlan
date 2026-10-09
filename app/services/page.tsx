import { pageMetadata } from '@/lib/metadata'
import ServiceCard from '@/components/ServiceCard'
import { flagshipServices, allServices } from '@/lib/services-data'
import SlimPageHeader from '@/components/SlimPageHeader'
import Section from '@/components/Section'
import DeliveryProcess from '@/components/DeliveryProcess'

export const metadata = pageMetadata('/services', 'Services - Superlan East Africa Limited', 'Superlan East Africa Limited provides end-to-end ICT solutions including ERP, Bespoke IT Solutions, Managed IT Services, Cybersecurity, Cloud Solutions, and more.')

const whyPartnerItems = [
  'Experienced ICT professionals',
  'Tailored technology solutions',
  'End-to-end project delivery',
  'Reliable technical support',
  'Cost-effective implementations',
  'Long-term technology partnerships',
]

export default function ServicesPage() {
  return (
    <>
      {/* Slim Page Header */}
      <SlimPageHeader
        title="Our Services"
        subtitle="End-to-end ICT solutions spanning ERP systems, bespoke IT solutions, managed services, and cybersecurity, delivered to help organizations improve efficiency, enhance productivity, and embrace digital transformation."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Flagship Solutions */}
      <Section tone="tinted" tightTop>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-4">Flagship Solutions</h2>
            <p className="text-base text-on-surface-variant max-w-[600px] mx-auto">
              Our core service areas where we deliver the deepest expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
            {flagshipServices.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-32">
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                chips={service.chips}
                featured
              />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* All Services */}
      <Section tone="default">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="mb-12">
            <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-4">All Services</h2>
            <p className="text-base text-on-surface-variant max-w-[600px]">
              A complete overview of our ICT solutions and support services.
            </p>
          </div>
          <div className="flex flex-col">
            {allServices.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </Section>

      <DeliveryProcess />

      {/* Why Partner With Us */}
      <Section tone="tinted">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 md:gap-12">
            <div>
              <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-5">Why Partner With Us</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                We combine technical expertise with a customer-focused approach to deliver solutions that drive real business outcomes.
              </p>
              <div className="flex flex-col max-w-[480px]">
                {whyPartnerItems.map((item) => (
                  <div key={item} className="flex items-start gap-4 py-4 border-b border-outline/25 last:border-b-0">
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5 text-on-secondary-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
