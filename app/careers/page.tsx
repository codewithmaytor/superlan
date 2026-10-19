import { pageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { GraduationCap, Users, Heart, Smile } from 'lucide-react'
import SlimPageHeader from '@/components/SlimPageHeader'
import Section from '@/components/Section'

export const metadata = pageMetadata('/careers', 'Careers - Superlan East Africa Limited', 'Explore project management, network engineering, security, power, optical fibre and structured cabling opportunities at Superlan East Africa Limited.')

const recruitmentEmail = 'hr@superlan.co.ke'

const opportunities = [
  {
    id: 'project-manager',
    title: 'Project Manager',
    openings: '2 positions',
    requirements: [
      "Relevant bachelor's degree.",
      'At least 10 years of general experience, including 7 years of specific experience relevant to the role.',
      'Experience on at least 3 similar projects, with the role performed clearly stated.',
      'PMP, PRINCE2 or PMI-type project management certification.',
    ],
  },
  {
    id: 'network-designer',
    title: 'Network Designer',
    openings: '2 positions',
    requirements: [
      'Relevant degree.',
      'At least 7 years of general experience, including 5 years of specific experience relevant to the role.',
      'Experience on at least 2 similar network design projects.',
      'GIS / passive / logical network design certification evidence.',
    ],
  },
  {
    id: 'network-engineer',
    title: 'Network Engineer',
    openings: '2 positions',
    requirements: [
      'Relevant diploma or higher qualification.',
      'At least 7 years of general experience, including 5 years of specific experience relevant to the role.',
      'Experience on at least 1 similar network implementation project.',
      'Routing, switching or wireless certification relevant to your experience.',
    ],
  },
  {
    id: 'information-security-expert',
    title: 'Information Security Expert',
    openings: '1 position',
    requirements: [
      "Relevant bachelor's degree.",
      'At least 7 years of general experience, including 3 years of network security experience.',
      'Recognized security certification.',
    ],
  },
  {
    id: 'power-specialist',
    title: 'Power Specialist',
    openings: null,
    requirements: [
      'Degree in electrical engineering, electronics or a related field.',
      'At least 3 years of electrical installation experience.',
      'Recognized certification or equivalent qualification.',
    ],
  },
  {
    id: 'optical-fibre-specialist',
    title: 'Optical Fibre Specialist',
    openings: null,
    requirements: [
      'Relevant diploma.',
      'At least 5 years of telecom or ICT experience, including 3 years in optical transmission design/configuration.',
    ],
  },
  {
    id: 'structured-cabling-installer',
    title: 'Structured Cabling Installer',
    openings: null,
    requirements: [
      'Relevant diploma.',
      'At least 5 years of telecom or ICT experience, including 3 years of structured cabling work.',
    ],
  },
]

function applicationHref(role?: string) {
  const subject = role ? `Application - ${role}` : 'Career Application - [Role Title]'
  return `mailto:${recruitmentEmail}?subject=${encodeURIComponent(subject)}`
}

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
          <div className="max-w-[800px] mb-10">
            <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground">Current Opportunities</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mt-4">
              We invite applications from qualified professionals for the following roles.
              Review the requirements and send a tailored CV with supporting evidence to our HR team.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {opportunities.map((opportunity) => (
              <article
                key={opportunity.id}
                id={opportunity.id}
                aria-labelledby={`${opportunity.id}-title`}
                className="flex flex-col bg-background border border-outline/25 rounded-large p-6 md:p-8 scroll-mt-24"
              >
                <h3 id={`${opportunity.id}-title`} className="text-2xl font-medium text-foreground">
                  {opportunity.title}
                </h3>
                {opportunity.openings && (
                  <p className="text-sm font-medium text-on-secondary-container mt-2">{opportunity.openings}</p>
                )}
                <ul className="list-disc pl-5 space-y-3 text-base text-on-surface-variant leading-relaxed mt-5 mb-6">
                  {opportunity.requirements.map((requirement) => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ul>
                <a
                  href={applicationHref(opportunity.title)}
                  aria-label={`Apply by email for ${opportunity.title}`}
                  className="mt-auto inline-flex self-start items-center justify-center min-h-12 px-5 py-3 text-base font-medium border border-outline text-foreground rounded-small hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary transition-colors duration-200"
                >
                  Apply by email
                </a>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="default">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="max-w-[800px]">
            <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground">How to Apply</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mt-5">
              Email your tailored CV and relevant supporting documents to{' '}
              <a href={applicationHref()} className="text-primary underline underline-offset-4 break-all">
                {recruitmentEmail}
              </a>. Use the role title as your email subject.
            </p>
            <p className="text-base text-on-surface-variant leading-relaxed mt-5">
              Submit a CV tailored to the role. Make each requirement easy to verify by including:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-base text-on-surface-variant leading-relaxed mt-4">
              <li>Your education, qualifications and relevant certifications, with supporting certificates.</li>
              <li>Your total years of experience and years in the specific discipline, with employment and project dates.</li>
              <li>Named similar projects, the role you performed, and the project scope or value where you can substantiate it.</li>
              <li>Employer or client evidence supporting your experience, such as reference letters or completion certificates that you have permission to share.</li>
              <li>Your availability and notice period, if applicable.</li>
            </ul>
            <p className="text-base text-on-surface-variant leading-relaxed mt-6">
              The apply links open your email app. Attach your CV and supporting documents before sending.
              You can also copy the email address into your preferred email service.
            </p>
            <p className="text-sm text-on-surface-variant mt-5">
              Read our <Link href="/privacy" className="text-primary underline underline-offset-4">privacy notice</Link> for information about email correspondence.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
