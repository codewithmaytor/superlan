import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CompanyStructuredData from '@/components/CompanyStructuredData'
import { siteConfig } from '@/lib/site-config'
import { pageMetadata } from '@/lib/metadata'

const roboto = localFont({
  src: './fonts/Roboto-Variable.ttf',
  weight: '400 700',
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  ...pageMetadata('/', siteConfig.name, siteConfig.description),
  metadataBase: new URL(siteConfig.url),
}

export const viewport: Viewport = {
  themeColor: '#0B1F3D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-KE" className={roboto.variable} data-scroll-behavior="smooth">
      <body className="bg-background text-foreground font-sans antialiased">
        <CompanyStructuredData />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
