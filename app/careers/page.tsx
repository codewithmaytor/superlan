import { pageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { GraduationCap, Users, Heart, Smile } from 'lucide-react'
import SlimPageHeader from '@/components/SlimPageHeader'
import Section from '@/components/Section'

export const metadata = pageMetadata('/careers', 'Careers - Superlan East Africa Limited', 'Join the Superlan East Africa Limited team. Find out about career opportunities.')

const whyJoinItems = [
  {
    icon: GraduationCap,
    title: 'Professional Growth',
  },
  {
    icon: Users,
    title: 'Career Development',
  },
  {
    icon: Heart,
    title: 'Supportive Work Environment',
  },
  {
    icon: Smile,
    title: 'Equal Employment Opportunity',
  },
]

export default function CareersPage() {
  return (
    <>
      <SlimPageHeader
        title="Careers"
        subtitle="Great people build great organizations. Join our growing team of talented professionals."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers' },
        ]}
      />

      {/* Why Join Us */}
      <Section tone="default" tightTop>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
            <div>
              <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-5">Why Join Us</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                We are always looking for talented, innovative, and passionate professionals to join our growing team.
              </p>
               <div className="flex flex-col max-w-[480px]">
                 {whyJoinItems.map((item) => (
                   <div key={item.title} className="flex items-start gap-4 py-4 border-b border-outline/25 last:border-b-0">
                     <div className="w-5 h-5 flex-shrink-0 mt-0.5 text-on-secondary-container">
                       <item.icon width={20} height={20} strokeWidth={2} />
                     </div>
                    <span className="text-base font-medium text-foreground">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </Section>

      {/* Current Opportunities */}
      <Section tone="tinted">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground">Current Opportunities</h2>
          </div>
          <div className="max-w-[600px] mx-auto text-center bg-transparent">
            <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mx-auto mb-4">
              <GraduationCap width={32} height={32} strokeWidth={2} />
            </div>
            <h3 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-4">No Open Roles Listed</h3>
            <p className="text-base text-on-surface-variant max-w-[480px] mx-auto mb-6">
              Contact our team to ask about current or future opportunities. We will explain how to apply when a suitable role is available.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium border border-outline text-foreground rounded-large hover:bg-surface-container active:bg-surface-container-low transition-colors duration-200"
            >
              Ask About Opportunities
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
