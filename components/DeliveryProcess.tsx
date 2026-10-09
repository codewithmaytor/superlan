import { deliverySteps } from '@/lib/company-profile'
import Section from '@/components/Section'

export default function DeliveryProcess() {
  return (
    <Section tone="default">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[clamp(24px,4vw,32px)] font-medium text-foreground mb-4">
            How We Deliver Your Project
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed mb-8">
            From understanding your requirements to supporting the completed solution, we agree the scope and delivery priorities with you.
          </p>
          <ol className="space-y-6" data-whatsapp-avoid>
            {deliverySteps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-4">
                <span
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-bold"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-medium text-foreground mb-1">{step.title}</h3>
                  <p className="text-base text-on-surface-variant leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
