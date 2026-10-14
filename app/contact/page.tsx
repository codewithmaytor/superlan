import { pageMetadata } from '@/lib/metadata'
import ContactForm from '@/components/ContactForm'
import { contactDeliveryReady } from '@/lib/contact-delivery'
import { siteConfig } from '@/lib/site-config'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
import SlimPageHeader from '@/components/SlimPageHeader'
import Section from '@/components/Section'

export const dynamic = 'force-dynamic'
export const metadata = pageMetadata('/contact', 'Contact Superlan | Nairobi IT Services & ERP Support', 'Contact Superlan in Nairobi, Kenya about ERP, custom software, managed IT or cybersecurity. Call, email, WhatsApp or send your project enquiry.')
export default function ContactPage() {
  const formAvailable = contactDeliveryReady()
  return <>
    <SlimPageHeader title="Contact Us" subtitle="Tell us about your technology needs. Our team can discuss services, support and your next project with you." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} />
    <Section tone="default" tightTop>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-6">Talk to our team</h2>
            <ul className="flex flex-col gap-5 mb-8">
              <li className="flex items-start gap-3"><Phone width={24} height={24} className="text-on-secondary-container flex-shrink-0 mt-2" aria-hidden="true" /><a href={siteConfig.phoneHref} className="inline-flex items-center min-h-11 text-lg text-primary underline">{siteConfig.phone}</a></li>
              {siteConfig.emailEnabled && <li className="flex items-start gap-3"><Mail width={24} height={24} className="text-on-secondary-container flex-shrink-0 mt-2" aria-hidden="true" /><a href={`mailto:${siteConfig.email}`} className="inline-flex items-center min-h-11 text-base text-primary underline break-all">{siteConfig.email}</a></li>}
              <li className="flex items-start gap-3"><MapPin width={24} height={24} className="text-on-secondary-container flex-shrink-0 mt-0.5" aria-hidden="true" /><p className="text-base text-on-surface-variant leading-relaxed">{siteConfig.address.street}<br />{siteConfig.address.city}<br />{siteConfig.address.postal}</p></li>
            </ul>
            <p className="text-base text-on-surface-variant leading-relaxed mb-5">Please call ahead to arrange an office visit.</p>
            <a href="https://www.google.com/maps/search/?api=1&query=View+Park+Towers+Nairobi" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 px-5 py-3 border border-outline rounded-large text-primary">Open location in Google Maps <ArrowUpRight width={20} height={20} aria-hidden="true" /></a>
          </div>
          <div data-whatsapp-avoid>
            <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-6">{formAvailable ? 'Send Us a Message' : 'Discuss your project'}</h2>
            {formAvailable ? <ContactForm /> : <div className="rounded-large p-6 md:p-8 bg-secondary-container text-on-secondary-container">
              <p className="text-lg font-medium mb-4">Start a conversation with Superlan</p>
              <p className="text-base leading-relaxed mb-6">Call or WhatsApp us with a brief description of your requirements, your organization and your preferred timeline. For a quotation, tell us which services you need.</p>
              <div className="flex flex-wrap gap-3">
                <a href={siteConfig.phoneHref} className="inline-flex min-h-12 items-center justify-center px-6 py-3 rounded-large bg-primary text-white font-medium">Call our team</a>
                <a href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent('Hello Superlan, I would like to discuss my requirements and request a quotation.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center px-6 py-3 rounded-large border border-on-secondary-container font-medium">WhatsApp us</a>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </Section>
  </>
}
