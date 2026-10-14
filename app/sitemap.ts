import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { insights } from '@/lib/news-data'
import { servicePages } from '@/lib/service-pages'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/clients',
    '/careers',
    '/news',
    '/csr',
    '/contact',
    '/privacy',
    ...servicePages.map(service => `/services/${service.slug}`),
    ...insights.map(article => `/news/${article.slug}`),
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
