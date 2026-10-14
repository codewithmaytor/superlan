import Link from 'next/link'
import { notFound } from 'next/navigation'
import SlimPageHeader from '@/components/SlimPageHeader'
import Section from '@/components/Section'
import StructuredData from '@/components/StructuredData'
import { pageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site-config'
import { flagshipForPage, servicePages } from '@/lib/service-pages'

export const dynamicParams = false

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = servicePages.find(item => item.slug === slug)
  if (!page) notFound()
  return pageMetadata(`/services/${page.slug}`, page.seoTitle, page.description)
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = servicePages.find(item => item.slug === slug)
  if (!page) notFound()
  const offering = flagshipForPage(page)
  const url = `${siteConfig.url}/services/${page.slug}`

  return <>
    <StructuredData data={{
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: page.title,
      serviceType: offering.title,
      description: page.description,
      url,
      provider: { '@id': `${siteConfig.url}/#organization` },
      areaServed: ['Kenya', 'East Africa'],
    }} />
    <SlimPageHeader
      title={page.title}
      subtitle={offering.description}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: offering.title }]}
    />
    <Section tone="default" tightTop>
      <div className="max-w-[1000px] mx-auto px-6 md:px-8 lg:px-10">
        <p className="text-lg leading-relaxed text-on-surface-variant max-w-[800px] mb-10">{page.introduction}</p>
        {page.sections.map(section => <section key={section.heading} className="max-w-[800px] mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">{section.heading}</h2>
          {section.paragraphs.map(paragraph => <p key={paragraph} className="text-base leading-relaxed text-on-surface-variant mb-4">{paragraph}</p>)}
        </section>)}
        <section className="border-t border-outline/30 pt-8 mb-10">
          <h2 className="text-2xl font-bold text-primary mb-5">Service areas</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 text-base text-on-surface-variant">
            {offering.chips?.map(item => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-on-secondary-container">✓</span>{item}</li>)}
          </ul>
        </section>
        <section data-whatsapp-avoid className="rounded-large bg-secondary-container text-on-secondary-container p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">Prepare your enquiry</h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">{page.brief.map(item => <li key={item}>{item}</li>)}</ul>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center px-6 py-3 bg-primary text-white rounded-large font-medium">Discuss {offering.title}</Link>
            <Link href="/news/planning-your-ict-project" className="inline-flex min-h-12 items-center text-primary underline">Read the project brief guide</Link>
          </div>
        </section>
        <nav aria-label="Related services" className="border-t border-outline/30 pt-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Explore related services</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">{servicePages.filter(item => item.slug !== page.slug).map(item => <li key={item.slug}>
            <Link href={`/services/${item.slug}`} className="inline-flex min-h-11 items-center text-primary underline">{flagshipForPage(item).title}</Link>
          </li>)}</ul>
        </nav>
      </div>
    </Section>
  </>
}
