import { pageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { GraduationCap, Shield, Monitor, Users, Star, Award } from 'lucide-react'
import SlimPageHeader from '@/components/SlimPageHeader'
import Section from '@/components/Section'

export const metadata = pageMetadata('/csr', 'CSR - Superlan East Africa Limited', 'Superlan East Africa Limited Corporate Social Responsibility - Education, Environment, Digital Literacy, Youth Empowerment, Community Development.')

const focusAreas = [
  {
    icon: GraduationCap,
    title: 'Education Support',
    description: 'Supporting access to quality education and learning opportunities.',
  },
  {
    icon: Shield,
    title: 'Environmental Conservation',
    description: 'Protecting and preserving our natural environment for future generations.',
  },
  {
    icon: Monitor,
    title: 'Digital Literacy',
    description: 'Empowering communities with essential digital skills and technology access.',
  },
  {
    icon: Users,
    title: 'Youth Empowerment',
    description: 'Creating opportunities for young people to thrive and lead.',
  },
  {
    icon: Star,
    title: 'Community Development',
    description: 'Investing in programs that strengthen and uplift local communities.',
  },
  {
    icon: Award,
    title: 'Technology for Social Good',
    description: 'Leveraging technology to drive positive social impact and change.',
  },
]

export default function CSRPage() {
  return (
    <>
      <SlimPageHeader
        title="Corporate Social Responsibility"
        subtitle="Business success should positively impact society. We are committed to making a meaningful contribution."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'CSR' },
        ]}
      />

      <Section tone="tinted" tightTop>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="mb-12">
            <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-4">Our Focus Areas</h2>
            <p className="text-base text-on-surface-variant max-w-[600px]">These focus areas guide the community partnerships we aim to develop.</p>
          </div>
          <div className="flex flex-col max-w-[900px] mx-auto">
             {focusAreas.map((area, index) => (
               <div key={area.title}>
                 <div className="flex items-start gap-4 py-5">
                   <div className="w-6 h-6 flex-shrink-0 mt-0.5 text-on-secondary-container">
                     <area.icon width={24} height={24} strokeWidth={2} />
                   </div>
                  <div>
                    <div className="text-xl font-medium text-foreground mb-1">{area.title}</div>
                    <p className="text-base text-on-surface-variant leading-relaxed">{area.description}</p>
                  </div>
                </div>
                {index < focusAreas.length - 1 && (
                  <div className="h-px bg-outline/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Band */}
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div
          className="absolute w-[250px] h-[250px] bg-tertiary rounded-full blur-[80px] opacity-20 pointer-events-none z-0"
          style={{ top: '-40px', right: '-30px' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-8 lg:px-10 py-16 md:py-20 text-center">
          <h2 className="text-[clamp(32px,5vw,48px)] font-medium mb-4">Making a Meaningful Contribution</h2>
          <p className="text-lg opacity-90 max-w-[640px] mx-auto leading-relaxed">
            We are committed to making a meaningful contribution to the communities in which we operate.
          </p>
        </div>
      </section>
    </>
  )
}
