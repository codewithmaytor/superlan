import Link from 'next/link'
import { notFound } from 'next/navigation'
import { insights } from '@/lib/news-data'
import { pageMetadata } from '@/lib/metadata'
import SlimPageHeader from '@/components/SlimPageHeader'
import Section from '@/components/Section'
import StructuredData from '@/components/StructuredData'
import { siteConfig } from '@/lib/site-config'

export const dynamicParams = false
export function generateStaticParams() { return insights.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = insights.find(item => item.slug === slug)
  if (!article) notFound()
  const metadata = pageMetadata(`/news/${slug}`, `${article.title} | Superlan`, article.excerpt)
  return { ...metadata, openGraph: { ...metadata.openGraph, type: 'article' as const } }
}
export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = insights.find(item => item.slug === slug)
  if (!article) notFound()
  return <>
    <StructuredData data={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${siteConfig.url}/news/${slug}#article`,
      headline: article.title,
      description: article.excerpt,
      articleSection: article.category,
      inLanguage: 'en-KE',
      mainEntityOfPage: `${siteConfig.url}/news/${slug}`,
      author: { '@id': `${siteConfig.url}/#organization` },
      publisher: { '@id': `${siteConfig.url}/#organization` },
    }} />
    <SlimPageHeader title={article.title} subtitle={article.excerpt} breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'News & Insights', href: '/news' }, { label: 'Guide' }]} />
    <Section tone="default" tightTop>
      <article className="max-w-[800px] mx-auto px-6 md:px-8">
        <p className="text-sm font-medium text-on-secondary-container mb-8">{article.category} · Superlan East Africa Limited</p>
        {article.sections.map(section => <section key={section.heading} className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">{section.heading}</h2>
          {section.paragraphs.map(paragraph => <p key={paragraph} className="text-lg leading-relaxed text-on-surface-variant mb-4">{paragraph}</p>)}
        </section>)}
        <div className="border-t border-outline/40 pt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-large">Discuss your requirements</Link>
          <Link href="/news" className="inline-flex min-h-12 items-center px-6 py-3 text-primary underline">All guides</Link>
        </div>
      </article>
    </Section>
  </>
}
