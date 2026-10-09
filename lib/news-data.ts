export interface Insight {
  slug: string
  category: string
  title: string
  excerpt: string
  sections: { heading: string; paragraphs: string[] }[]
}

// Original guides grounded in our services and supplied company profile.
// These are not project announcements or client case studies.
export const insights: Insight[] = [
  {
    slug: 'planning-your-ict-project', category: 'Project Planning',
    title: 'What to include in your ICT project brief',
    excerpt: 'A clear brief helps turn a business need into an agreed scope, delivery plan and handover.',
    sections: [
      { heading: 'Start with the business need', paragraphs: ['Describe the problem you want to solve, the people affected and the outcome you want. Explain how the work is done today and where delays, duplicated effort or gaps occur. A useful brief explains the operating need before choosing a product.'] },
      { heading: 'Describe your existing environment', paragraphs: ['List the applications, equipment, locations and teams involved. Note which systems need to work together, what information needs to move between them and who can confirm the requirements. Do not include passwords or confidential records in an initial enquiry.'] },
      { heading: 'Agree priorities and constraints', paragraphs: ['Separate essential requirements from improvements that can follow later. Include your intended timeline, budget range, procurement process and any dates when systems must remain available. Discuss these constraints when agreeing the engagement scope.'] },
      { heading: 'Plan testing, training and support', paragraphs: ['Identify who will review the implementation and what they need to check before accepting it. Include user training, operating information and the support or maintenance you want after handover. These should be agreed as part of the project, alongside the implementation itself.'] },
    ],
  },
  {
    slug: 'choosing-your-technology-service', category: 'Our Services',
    title: 'Finding the right starting point for your technology needs',
    excerpt: 'Explore how ERP, bespoke IT solutions, managed services and cybersecurity fit different requirements.',
    sections: [
      { heading: 'ERP systems', paragraphs: ['Our ERP services cover implementation, customization, integration, support and maintenance. Areas listed in our service offering include finance, procurement, inventory, HR, payroll and reporting. Start the conversation with the processes you need to connect and the information your teams need to share.'] },
      { heading: 'Bespoke IT solutions', paragraphs: ['Our services include custom web applications and portals, mobile applications, integrations, dashboards and workflow automation. Explain the users, tasks and systems involved so the requirements can be reviewed before development begins.'] },
      { heading: 'Managed services', paragraphs: ['Our managed IT service offering includes help desk support, preventive and corrective maintenance, remote and on-site support, asset management and system monitoring. Discuss the systems to cover and agree the service scope, support hours and response arrangements for your engagement.'] },
      { heading: 'Cybersecurity', paragraphs: ['Our security services include network and endpoint protection, firewall configuration, backup and recovery, vulnerability assessments, security audits and awareness training. Explain the environment and the concern you want reviewed. The assessment scope and any authorized testing should be agreed before work begins.'] },
    ],
  },
  {
    slug: 'from-requirements-to-handover', category: 'Project Planning',
    title: 'From requirements to handover: our delivery process',
    excerpt: 'Five stages guide the discussion, implementation and ongoing support of an engagement.',
    sections: [
      { heading: 'Understand the requirement', paragraphs: ['The first stage reviews your operating environment, business needs and existing systems. The intended outcomes and scope of the engagement are agreed before implementation.'] },
      { heading: 'Design the solution', paragraphs: ['The next stage plans the application, configuration or infrastructure approach. Integrations and delivery priorities form part of this discussion, so the design reflects the agreed requirements.'] },
      { heading: 'Implement and test', paragraphs: ['The solution is developed, installed or configured, then tested against the agreed requirements. Testing provides an opportunity to review the implementation before handover.'] },
      { heading: 'Train and hand over', paragraphs: ['User training and operating information support adoption and day-to-day use. The handover should make clear who operates the system and where agreed support can be requested.'] },
      { heading: 'Support and maintain', paragraphs: ['Technical support and maintenance follow the terms agreed for the engagement. Monitoring and corrective assistance are included where they form part of that scope.'] },
    ],
  },
]
