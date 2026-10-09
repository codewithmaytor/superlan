import { siteConfig } from '@/lib/site-config'

export default function CompanyStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        logo: `${siteConfig.url}/logo.svg`,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        telephone: siteConfig.phoneHref.replace('tel:', ''),
        email: siteConfig.emailEnabled ? siteConfig.email : undefined,
        foundingDate: String(siteConfig.founded),
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressCountry: siteConfig.address.country,
        },
        sameAs: Object.values(siteConfig.social).filter((url) => url.startsWith('https://')),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: 'en-KE',
        publisher: { '@id': `${siteConfig.url}/#organization` },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}
