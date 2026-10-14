import { pageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Eye } from 'lucide-react'
import LogoMarquee from '@/components/LogoMarquee'
import Section from '@/components/Section'
import { clientGroups } from '@/lib/clients-data'
import { siteConfig } from '@/lib/site-config'
import { serviceHref } from '@/lib/service-pages'

export const metadata = pageMetadata('/', 'IT Solutions in Kenya | Superlan East Africa Limited', siteConfig.description)

const whyChooseUsItems = [
  {
    icon: 'Clock',
    title: 'Over a Decade of Experience',
    description: 'Industry expertise built over years of successful project delivery across East Africa.',
  },
  {
    icon: 'Users',
    title: 'Professional Team',
    description: 'Highly skilled professionals committed to delivering exceptional results.',
  },
  {
    icon: 'Star',
    title: 'Innovative Solutions',
    description: 'Practical, cutting-edge approaches tailored to your organization\'s unique needs.',
  },
  {
    icon: 'CheckCircle',
    title: 'Quality Commitment',
    description: 'Unwavering dedication to quality and complete customer satisfaction.',
  },
  {
    icon: 'Calendar',
    title: 'Reliable Delivery',
    description: 'Projects delivered on time, within budget, and to the highest standards.',
  },
  {
    icon: 'Shield',
    title: 'Trusted Across East Africa',
    description: 'A trusted partner for organizations throughout the East African region.',
  },
]

const iconComponents: Record<string, React.ReactNode> = {
  Clock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Users: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Star: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
    </svg>
  ),
  CheckCircle: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Calendar: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Eye: (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
}

const marqueeImages = clientGroups.flatMap((group) =>
  group.clients.map((client) => ({
    src: client.logo,
    alt: client.alt,
    width: client.width,
    height: client.height,
  }))
)

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-surface-container min-h-[520px] md:min-h-[600px] flex items-center">
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center opacity-[0.12] pointer-events-none z-0 md:opacity-[0.10]">
          <Image src="/logo.svg" alt="" width={322} height={437} preload fetchPriority="high" className="w-[260px] md:w-[340px] h-auto" />
        </div>
        <div
          className="absolute w-[400px] h-[400px] bg-primary rounded-full blur-[80px] opacity-25 pointer-events-none z-0"
          style={{ top: '-100px', left: '-100px' }}
          aria-hidden="true"
        />
        <div
          className="absolute w-[300px] h-[300px] bg-tertiary rounded-full blur-[80px] opacity-25 pointer-events-none z-0"
          style={{ bottom: '-80px', right: '-60px' }}
          aria-hidden="true"
        />
        <div
          className="absolute w-[250px] h-[250px] bg-on-secondary-container rounded-full blur-[80px] opacity-15 pointer-events-none z-0"
          style={{ top: '40%', left: '60%' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-8 lg:px-10 py-10 md:py-20">
          <h1
            id="hero-title"
            className="text-[clamp(28px,8vw,36px)] md:text-[clamp(40px,6vw,56px)] lg:text-6xl xl:text-7xl font-medium tracking-[-0.01em] leading-[1.1] text-foreground max-w-[900px] lg:max-w-6xl xl:max-w-6xl mx-auto text-center mb-4 md:mb-6"
          >
            Building Excellence.
            <br />
            Delivering Innovation.
            <br />
            Creating Lasting Partnerships.
          </h1>
          <p className="text-[clamp(16px,2.5vw,20px)] lg:text-xl xl:text-2xl text-on-surface-variant leading-normal md:leading-relaxed max-w-[720px] lg:max-w-6xl xl:max-w-6xl mx-auto text-center mb-6 md:mb-8">
            Since 2011, Superlan East Africa Limited has been the technology partner businesses across East Africa trust to build, innovate, and protect, delivering professional, reliable solutions built to last.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center h-12 px-5 text-base md:h-14 md:px-8 md:text-lg font-medium bg-primary text-on-primary rounded-large hover:bg-primary-hover active:bg-primary-pressed transition-colors duration-200"
            >
              About Superlan
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center h-12 px-5 text-base md:h-14 md:px-8 md:text-lg font-medium bg-secondary-container text-on-secondary-container rounded-large hover:opacity-90 active:opacity-80 transition-opacity duration-200"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-5 text-base md:h-14 md:px-8 md:text-lg font-medium border border-outline text-foreground rounded-large hover:bg-surface-container active:bg-surface-container-low transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="Our core services" className="bg-primary text-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10 py-6 md:py-7">
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-base md:text-lg lg:text-xl font-bold leading-relaxed">
            <span className="inline-flex items-center gap-3 whitespace-nowrap">
              <Link href={serviceHref('erp')} className="hover:underline underline-offset-4">ERP Systems</Link>
              <span aria-hidden="true" className="text-tertiary">·</span>
              <Link href={serviceHref('software')} className="hover:underline underline-offset-4">Bespoke IT Solutions</Link>
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-tertiary">·</span>
            <span className="inline-flex items-center gap-3 whitespace-nowrap">
              <Link href={serviceHref('managed')} className="hover:underline underline-offset-4">Managed Services</Link>
              <span aria-hidden="true" className="text-tertiary">·</span>
              <Link href={serviceHref('cybersecurity')} className="hover:underline underline-offset-4">Cybersecurity</Link>
            </span>
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <Section tone="tinted">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-4">Why Choose Us</h2>
            <p className="text-base text-on-surface-variant max-w-[600px] mx-auto">
              Over a decade of industry experience and a commitment to excellence.
            </p>
          </div>
          <div className="flex flex-col max-w-[900px] mx-auto">
            {whyChooseUsItems.map((item, index) => (
              <div key={item.title}>
                <div className="flex items-start gap-4 py-5">
                  <div className={cn(
                    'w-6 h-6 flex-shrink-0 mt-0.5 text-on-secondary-container'
                  )}>
                    {iconComponents[item.icon]}
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-medium text-foreground mb-1">{item.title}</div>
                    <p className="text-base text-on-surface-variant leading-relaxed">{item.description}</p>
                  </div>
                </div>
                {index < whyChooseUsItems.length - 1 && (
                  <div className="h-px bg-outline/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Commitment */}
      <Section tone="default">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-5">Our Commitment</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                At Superlan East Africa Limited, we believe every project deserves careful planning, professional execution, and continuous support. Our commitment is to deliver solutions that exceed expectations while building long-term partnerships based on trust, integrity, and excellence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-surface-container-low to-secondary-container rounded-large min-h-[280px] flex items-center justify-center text-on-surface-variant opacity-60">
              {iconComponents.Eye}
            </div>
          </div>
          <div className="mt-8 p-6 bg-secondary-container rounded-large border-l-4 border-on-secondary-container max-w-[800px]">
            <p className="text-base font-medium text-on-secondary-container m-0">
              One system. One Source of truth. Unlimited Possibilities.
            </p>
          </div>
        </div>
      </Section>

      {/* Trust Marquee */}
      <Section tone="tinted">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10 mb-5 flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <p className="min-w-0 text-base font-medium text-on-surface-variant">
            Trusted by organizations across East Africa
          </p>
          <Link href="/clients" className="flex-shrink-0 text-sm font-medium text-primary hover:underline whitespace-nowrap underline-offset-4">
            View all clients →
          </Link>
        </div>
        <LogoMarquee images={marqueeImages} />
      </Section>

      {/* CTA Band */}
      <section className="relative w-full overflow-hidden bg-primary text-white">
        <div
          className="absolute w-[300px] h-[300px] bg-tertiary rounded-full blur-[80px] opacity-20 pointer-events-none z-0"
          style={{ top: '-60px', right: '-40px' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-8 lg:px-10 py-16 md:py-20 text-center">
          <h2 className="text-[clamp(32px,5vw,48px)] font-medium mb-4">Ready to Transform Your Business?</h2>
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

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ')
}
