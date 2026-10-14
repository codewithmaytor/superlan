import { pageMetadata } from '@/lib/metadata'
import { insights } from '@/lib/news-data'
import InsightsList from '@/components/InsightsList'
import SlimPageHeader from '@/components/SlimPageHeader'
import Section from '@/components/Section'

export const metadata = pageMetadata('/news', 'ICT Project Planning & Service Guides | Superlan Kenya', 'Read Superlan’s guides to preparing an ICT project brief, choosing ERP, software, managed IT or cybersecurity services, and planning delivery and handover.')
export default function NewsPage() {
  return <>
    <SlimPageHeader title="News & Insights" subtitle="Practical guides to our services, project planning and delivery process." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'News & Insights' }]} />
    <Section tone="tinted" tightTop>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
        <InsightsList articles={insights.map(({ slug, category, title, excerpt }) => ({ slug, category, title, excerpt }))} />
      </div>
    </Section>
  </>
}
