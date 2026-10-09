import type { Metadata } from 'next'
import { siteConfig } from './site-config'

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = new URL(path, siteConfig.url).toString()
  const image = {
    url: siteConfig.ogImage,
    width: 1200,
    height: 630,
    alt: siteConfig.name,
  }

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_KE',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
