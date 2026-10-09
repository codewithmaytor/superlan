'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Insight } from '@/lib/news-data'

type Summary = Pick<Insight, 'slug' | 'category' | 'title' | 'excerpt'>
export default function InsightsList({ articles }: { articles: Summary[] }) {
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(articles.map(article => article.category))]
  const visible = articles.filter(article => category === 'All' || article.category === category)
  return <div>
    <div className="flex flex-wrap gap-3 mb-6" role="group" aria-label="Filter insights by category">
      {categories.map(item => <button key={item} type="button" aria-pressed={category === item} aria-controls="insight-results" onClick={() => setCategory(item)} className={`min-h-11 px-5 py-2 rounded-full text-base font-medium transition-colors ${category === item ? 'bg-primary text-white' : 'bg-secondary-container text-on-secondary-container hover:bg-surface-container'}`}>{item}</button>)}
    </div>
    <p className="text-sm text-on-surface-variant mb-6" role="status">{visible.length} {visible.length === 1 ? 'guide' : 'guides'}</p>
    <div id="insight-results" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {visible.map(article => <article key={article.slug} className="flex flex-col rounded-large border border-outline/40 bg-background p-6 md:p-8">
        <p className="text-sm font-medium text-on-secondary-container mb-4">{article.category}</p>
        <h2 className="text-2xl font-bold text-primary mb-4"><Link href={`/news/${article.slug}`} className="hover:underline">{article.title}</Link></h2>
        <p className="text-base text-on-surface-variant leading-relaxed mb-6">{article.excerpt}</p>
        <Link href={`/news/${article.slug}`} aria-label={`Read guide: ${article.title}`} className="inline-flex items-center gap-2 min-h-11 mt-auto text-primary font-medium">Read guide <ArrowUpRight width={20} height={20} aria-hidden="true" /></Link>
      </article>)}
    </div>
  </div>
}
