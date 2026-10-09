import Link from 'next/link'
import { navItems } from '@/lib/nav-items'
import { siteConfig } from '@/lib/site-config'

const services = [{ label: 'ERP Systems', id: 'erp' }, { label: 'Bespoke IT Solutions', id: 'software' }, { label: 'Managed Services', id: 'managed' }, { label: 'Cybersecurity', id: 'cybersecurity' }]
export default function Footer() {
  const socials = Object.entries(siteConfig.social).filter(([, url]) => url.startsWith('https://'))
  return <footer className="bg-primary text-white/85 py-16 content-visibility-auto">
    <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10">
        <div className="max-w-[360px]">
          <div className="text-2xl font-bold text-white mb-3">SUPERLAN</div>
          <p className="text-base mt-2">One system. One source of truth. Unlimited possibilities.</p>
          <p className="text-sm text-white/80 mt-4">ERP systems. Bespoke IT solutions. Managed services. Cybersecurity. Since 2011.</p>
          <ul className="flex flex-col items-start gap-2 mt-5 text-base">
            <li><a href={siteConfig.phoneHref} className="inline-flex items-center min-h-11 hover:underline">{siteConfig.phone}</a></li>
            {siteConfig.emailEnabled && <li><a href={`mailto:${siteConfig.email}`} className="inline-flex items-center min-h-11 break-all hover:underline">{siteConfig.email}</a></li>}
            <li><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-11 hover:underline">WhatsApp our team</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white tracking-[0.05em] uppercase mb-4">Quick Links</h2>
          <ul>{navItems.map(item => <li key={item.href}><Link href={item.href} className="inline-flex min-h-11 items-center text-base hover:text-white hover:underline">{item.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white tracking-[0.05em] uppercase mb-4">Our Services</h2>
          <ul>{services.map(service => <li key={service.id}><Link href={`/services#${service.id}`} className="inline-flex min-h-11 items-center text-base hover:text-white hover:underline">{service.label}</Link></li>)}</ul>
          <Link href="/privacy" className="inline-flex min-h-11 items-center mt-5 hover:underline">Privacy notice</Link>
          {socials.length > 0 && <ul className="mt-5">{socials.map(([name, url]) => <li key={name}><a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center capitalize hover:underline">{name === 'twitter' ? 'X (Twitter)' : name}</a></li>)}</ul>}
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row gap-3 md:justify-between text-center md:text-left text-sm text-white/80">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
        <p className="max-w-[480px]">{siteConfig.address.street}, {siteConfig.address.postal}, {siteConfig.address.city}</p>
      </div>
    </div>
  </footer>
}
