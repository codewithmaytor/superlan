import { pageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import SlimPageHeader from '@/components/SlimPageHeader'
import Section from '@/components/Section'

export const metadata = pageMetadata('/about', 'About Superlan | IT Company in Nairobi, Kenya', 'Meet Superlan East Africa Limited, a Nairobi ICT company founded in 2011. Explore our story, ERP, software, infrastructure and managed IT services.')

const timelineItems = [
  {
    year: '2011',
    text: 'Founded with a vision to provide reliable, innovative solutions across East Africa.',
  },
  {
    year: '2011 – 2025',
    text: 'Steady growth through dedication, professionalism, and commitment to customer satisfaction.',
  },
  {
    year: '2026',
    text: 'Fully incorporated — strengthening corporate identity and expanding regional growth.',
  },
]

const coreValues = [
  {
    icon: 'Shield',
    title: 'Integrity',
    description: 'We conduct business honestly, ethically, and transparently.',
  },
  {
    icon: 'Star',
    title: 'Excellence',
    description: 'We strive for the highest standards in every service we deliver.',
  },
  {
    icon: 'Lightbulb',
    title: 'Innovation',
    description: 'We embrace technology and creative thinking to provide effective solutions.',
  },
  {
    icon: 'Heart',
    title: 'Customer Focus',
    description: 'Our clients remain at the center of every decision we make.',
  },
  {
    icon: 'CheckSquare',
    title: 'Professionalism',
    description: 'We uphold competence, accountability, respect, and discipline.',
  },
  {
    icon: 'Users2',
    title: 'Teamwork',
    description: 'We achieve greater success through collaboration and mutual respect.',
  },
  {
    icon: 'Sun',
    title: 'Sustainability',
    description: 'We support responsible business practices that contribute to long-term development.',
  },
]

const iconComponents: Record<string, React.ReactNode> = {
  Shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Star: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
    </svg>
  ),
  Lightbulb: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.636-6.364l-.707-.707" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  Heart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  CheckSquare: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Users2: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Sun: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
}

export default function AboutPage() {
  return (
    <>
      {/* Slim Page Header */}
      <SlimPageHeader
        title="About Us"
        subtitle="ERP systems. Bespoke IT solutions. Managed services. Cybersecurity. Building a legacy of excellence, innovation, and trust across East Africa since 2011."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* Who We Are */}
      <Section tone="default" tightTop>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="max-w-[800px] mx-auto">
            <p className="text-lg text-on-surface-variant leading-relaxed mb-5">
              Superlan East Africa Limited provides professional ICT solutions for businesses, government institutions, NGOs and private clients. Founded in 2011, we help organizations improve efficiency, modernize operations and make practical use of technology.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-5">
              In 2026, the company achieved a major milestone by becoming fully incorporated, strengthening our corporate identity and positioning us for expanded growth across the region.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We design, implement and support technology around your business requirements, bringing enterprise software, ICT infrastructure, cloud solutions, cybersecurity and managed support together under one company.
            </p>
            <a
              href={siteConfig.companyProfile}
              download
              className="inline-flex items-center justify-center min-h-12 px-5 py-3 mt-6 rounded-large bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Download Company Profile (PDF)
            </a>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section tone="tinted">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="relative pl-8 max-w-[800px] mx-auto">
            <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-outline" />
            {timelineItems.map((item) => (
              <div key={item.year} className="relative pb-8">
                <div
                   className="absolute -left-[34px] top-1 w-3 h-3 rounded-full bg-tertiary border-2 border-background"
                  aria-hidden="true"
                />
                <div className="text-sm font-bold text-primary tracking-wide">{item.year}</div>
                <p className="text-base text-on-surface-variant mt-1 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section tone="default">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 text-tertiary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h2 className="text-[clamp(24px,4vw,32px)] font-medium m-0">Our Vision</h2>
              </div>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                 To become East Africa&apos;s leading provider of innovative, reliable, and sustainable business solutions recognized for excellence, integrity, and customer satisfaction.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 text-on-secondary-container">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2 className="text-[clamp(24px,4vw,32px)] font-medium m-0">Our Mission</h2>
              </div>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                To deliver high-quality products and professional services that exceed customer expectations through innovation, skilled personnel, modern technology, and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section tone="tinted">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-4">Our Core Values</h2>
            <p className="text-base text-on-surface-variant">The principles that guide everything we do.</p>
          </div>
          <div className="flex flex-col max-w-[900px] mx-auto">
             {coreValues.map((value, index) => (
               <div key={value.title}>
                 <div className="flex items-start gap-4 py-5">
                   <div className="w-5 h-5 flex-shrink-0 mt-0.5 text-on-secondary-container">
                     {iconComponents[value.icon]}
                   </div>
                  <div>
                    <div className="text-xl font-medium text-foreground mb-1">{value.title}</div>
                    <p className="text-base text-on-surface-variant leading-relaxed">{value.description}</p>
                  </div>
                </div>
                {index < coreValues.length - 1 && (
                  <div className="h-px bg-outline/25" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
