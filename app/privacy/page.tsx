import { pageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/lib/site-config'
import SlimPageHeader from '@/components/SlimPageHeader'
import Section from '@/components/Section'

export const metadata = pageMetadata('/privacy', 'Website Privacy Notice - Superlan East Africa Limited', 'How this website handles enquiries, technical information and links to other services.')
export default function PrivacyPage() {
  return <>
    <SlimPageHeader title="Website Privacy Notice" subtitle="Information about your use of superlan.co.ke and enquiries to our team." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Notice' }]} />
    <Section tone="default" tightTop>
      <div className="max-w-[800px] mx-auto px-6 md:px-8 text-base leading-relaxed text-on-surface-variant space-y-8">
        <p>Updated 9 October 2026. This notice covers the Superlan East Africa Limited website. Project-specific data arrangements are agreed separately for the relevant engagement.</p>
        <section><h2 className="text-2xl font-bold text-primary mb-3">Enquiries</h2><p>When you contact us, we use the details you provide to respond to your request and discuss any related services. If the website message form is available, it asks for your name, email address, subject and message; your phone number is optional. Submitted messages are sent to our business mailbox. The website does not maintain a separate database of enquiry messages.</p><p className="mt-3">Please provide only information needed for your enquiry. Do not send passwords, payment card details or sensitive personal records through this website.</p></section>
        <section><h2 className="text-2xl font-bold text-primary mb-3">Technical information</h2><p>The website is prepared for hosting on Vercel, and our business email is provided through Truehost. Hosting and email providers process information needed to operate those services, which may include request logs and message metadata. When the form is enabled, Upstash Redis stores short-lived submission counters and an identifier derived from your email address to limit repeated messages; your message content is not sent to Redis.</p><p className="mt-3">The site does not include advertising trackers or analytics scripts, and its application code does not set tracking cookies.</p></section>
        <section><h2 className="text-2xl font-bold text-primary mb-3">Email correspondence</h2><p>Messages may remain in business email correspondence while your enquiry or related work is handled. Contact our team about the information held in your correspondence, its continued retention or a request to remove it.</p></section>
        <section><h2 className="text-2xl font-bold text-primary mb-3">Other services</h2><p>WhatsApp and Google Maps links open services operated by other organizations. Those services handle information under their own privacy notices. The website does not load an embedded map automatically.</p></section>
        <section><h2 className="text-2xl font-bold text-primary mb-3">Questions and requests</h2><p>Contact Superlan East Africa Limited to ask about your information or request access, correction or deletion, subject to applicable obligations. Call <a href={siteConfig.phoneHref} className="text-primary underline">{siteConfig.phone}</a>{siteConfig.emailEnabled && <> or email <a href={`mailto:${siteConfig.email}`} className="text-primary underline">{siteConfig.email}</a></>}. Our office is at {siteConfig.address.street}, {siteConfig.address.city}.</p><p className="mt-3">You can also contact Kenya’s <a href="https://www.odpc.go.ke/" className="text-primary underline" target="_blank" rel="noopener noreferrer">Office of the Data Protection Commissioner</a> about data protection concerns.</p></section>
      </div>
    </Section>
  </>
}
