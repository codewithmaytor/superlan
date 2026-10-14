import { flagshipServices } from './services-data'

export interface ServicePage {
  id: 'erp' | 'software' | 'managed' | 'cybersecurity'
  slug: string
  title: string
  seoTitle: string
  description: string
  introduction: string
  sections: readonly { heading: string; paragraphs: readonly string[] }[]
  brief: readonly string[]
}

// Service scope comes from services-data.ts and the existing company-profile
// delivery process. Do not add product partnerships, SLAs or results without evidence.
export const servicePages = [
  {
    id: 'erp',
    slug: 'erp-systems',
    title: 'ERP Implementation and Support in Kenya',
    seoTitle: 'ERP Implementation & Support in Kenya | Superlan',
    description: 'ERP implementation, customization, integration and support from Superlan in Nairobi, Kenya. Discuss finance, inventory, HR, payroll and reporting needs.',
    introduction: 'Superlan East Africa Limited provides enterprise resource planning implementation, customization, integration, support and maintenance. Our team is based in Nairobi, Kenya, and reviews your business processes before agreeing the system and project scope.',
    sections: [
      {
        heading: 'Connect the processes your teams rely on',
        paragraphs: ['An ERP discussion starts with how information moves between departments. Explain your current finance, procurement, inventory, people and reporting processes, including repeated data entry and systems that need to exchange information.', 'Our listed service areas include accounting, supply chain, stock control, HR, payroll, assets, customer relationships, sales, manufacturing, projects and business intelligence. The modules and integrations for your engagement are agreed against your requirements.'],
      },
      {
        heading: 'Implementation, integration and handover',
        paragraphs: ['The delivery process covers understanding the requirement, designing the solution, implementation and testing, user training and handover. Identify the people who will review workflows, confirm requirements and test the agreed implementation.', 'If you already use an ERP system, tell us which parts need customization, integration, support or maintenance. The application, existing environment and intended changes help define the work to be reviewed.'],
      },
      {
        heading: 'Agree the support you need',
        paragraphs: ['Support and maintenance are discussed as part of the engagement. Confirm the systems to cover, the operating information your team needs and the support arrangements to agree before handover.'],
      },
    ],
    brief: ['Departments, users and processes to connect', 'Existing applications and required integrations', 'Modules and reports you need', 'Implementation priorities, timeline and training needs'],
  },
  {
    id: 'software',
    slug: 'custom-software-development',
    title: 'Custom Software Development in Kenya',
    seoTitle: 'Custom Software Development in Kenya | Superlan',
    description: 'Custom web applications, mobile apps, portals, integrations and workflow automation from Superlan in Nairobi, Kenya. Start with your business requirements.',
    introduction: 'Superlan East Africa Limited develops bespoke software and digital systems around an organization’s workflows and business requirements. Our Nairobi team discusses the users, tasks, existing systems and intended outcomes before agreeing the development scope.',
    sections: [
      {
        heading: 'Web applications, portals and mobile apps',
        paragraphs: ['Our service offering includes custom web applications and portals, tailored Android and iOS applications, and business management systems. Describe who will use the application, what they need to do and which information they need to access.', 'The listed system areas include document, school, hospital, SACCO, inventory and fleet management, as well as e-commerce platforms. Discuss your specific operating requirements rather than assuming a standard feature list fits every organization.'],
      },
      {
        heading: 'Integrations, dashboards and automation',
        paragraphs: ['Our bespoke IT offering includes enterprise integrations, ERP and CRM solutions, business intelligence dashboards and workflow automation. Explain which applications need to connect, who controls access and what information needs to move between systems.'],
      },
      {
        heading: 'From an agreed brief to a tested system',
        paragraphs: ['The delivery process starts with requirements and solution design, then moves through implementation, testing, training and handover. Agree who will test the application and how the implementation will be reviewed against the brief.', 'Support and maintenance follow the scope agreed for the engagement. Include the operating information and assistance your team will need after handover when discussing the project.'],
      },
    ],
    brief: ['Users and tasks the software should support', 'Current workflows and applications', 'Required integrations, reports and access arrangements', 'Essential features, budget range and intended timeline'],
  },
  {
    id: 'managed',
    slug: 'managed-it-services',
    title: 'Managed IT Services in Kenya',
    seoTitle: 'Managed IT Services & Support in Kenya | Superlan',
    description: 'Help desk, remote and on-site IT support, maintenance, asset management and monitoring from Superlan in Nairobi, Kenya. Agree support scope with our team.',
    introduction: 'Superlan East Africa Limited provides managed IT support, monitoring and maintenance. Our Nairobi team reviews the systems and locations you need covered, then discusses the support arrangements for your engagement.',
    sections: [
      {
        heading: 'Support for your users and systems',
        paragraphs: ['Our managed service offering includes help desk support, remote support and on-site technical assistance. Identify the users, equipment, applications and locations involved so the coverage can be reviewed.', 'Share the current support process, recurring issues and the people responsible for reporting or approving work. This helps the discussion focus on the assistance your organization needs.'],
      },
      {
        heading: 'Maintenance, monitoring and asset management',
        paragraphs: ['The service areas include preventive maintenance, corrective maintenance, system monitoring and IT asset management. An annual maintenance contract can be discussed where that suits the required engagement.', 'Explain the systems that are critical to daily operations and any planned changes to the environment. Monitoring and maintenance activities should be agreed against that scope.'],
      },
      {
        heading: 'Agree coverage before the service starts',
        paragraphs: ['Discuss support hours, response arrangements, escalation contacts and the systems included in the agreement. These details depend on the engagement and should be confirmed with the team before service begins.'],
      },
    ],
    brief: ['Users, devices, applications and locations to cover', 'Recurring issues and current support arrangements', 'Required remote, on-site and maintenance assistance', 'Coverage hours, escalation contacts and reporting needs'],
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    title: 'Cybersecurity Services in Kenya',
    seoTitle: 'Cybersecurity Services in Kenya | Superlan',
    description: 'Network and endpoint protection, firewall configuration, backup, security assessments and awareness training from Superlan in Nairobi, Kenya.',
    introduction: 'Superlan East Africa Limited provides cybersecurity services covering protection, assessments, backup and awareness training. Our Nairobi team reviews your environment and the concern you want addressed before agreeing the service scope.',
    sections: [
      {
        heading: 'Network and endpoint protection',
        paragraphs: ['Our listed services include network security, firewall installation and configuration, endpoint protection and antivirus solutions. Describe the systems, devices and locations involved, along with the protection already in place.'],
      },
      {
        heading: 'Assessments and security audits',
        paragraphs: ['Vulnerability assessments and security audits form part of the service offering. Explain the environment and the questions you want reviewed. The scope, permissions and any authorized testing should be agreed before work begins.', 'Do not send passwords or sensitive records through an initial website enquiry. Start with a description of the requirement, and discuss how any necessary access or information will be handled with the team.'],
      },
      {
        heading: 'Backup, recovery and awareness',
        paragraphs: ['Our service offering also includes data backup and recovery and cybersecurity awareness training. Identify the systems or teams to cover and the requirements you want discussed.', 'Implementation, testing, handover and any ongoing support are agreed for the engagement. Confirm responsibilities and the work included when reviewing the proposed scope.'],
      },
    ],
    brief: ['The environment and security concern to review', 'Systems, locations and existing protection', 'Assessment permissions and intended scope', 'Backup, recovery, training or ongoing support requirements'],
  },
] as const satisfies readonly ServicePage[]

export function flagshipForPage(page: ServicePage) {
  const service = flagshipServices.find(item => item.id === page.id)
  if (!service) throw new Error(`Missing service offering: ${page.id}`)
  return service
}

export function serviceHref(id: string) {
  const page = servicePages.find(item => item.id === id)
  return page ? `/services/${page.slug}` : `/services#${id}`
}
