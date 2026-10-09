export interface ServiceCategory {
  id: string
  title: string
  description: string
  icon: string
  featured?: boolean
  chips?: string[]
}

export const flagshipServices: ServiceCategory[] = [
  {
    id: 'erp',
    title: 'Enterprise Resource Planning (ERP) Solutions',
    description: 'Implementation, customization, integration, support, and maintenance for comprehensive ERP systems.',
    icon: 'Monitor',
    featured: true,
    chips: [
      'Finance & Accounting',
      'Procurement & Supply Chain',
      'Inventory & Stock Control',
      'HR Management',
      'Payroll',
      'Asset Management',
      'CRM',
      'Sales & Distribution',
      'Manufacturing Operations',
      'Project Management',
      'Business Intelligence & Reporting',
    ],
  },
  {
    id: 'software',
    title: 'Bespoke IT Solutions',
    description: 'Custom software and digital systems designed from scratch around your exact workflows, security needs, and business goals.',
    icon: 'Code2',
    featured: true,
    chips: [
      'Bespoke Software Development',
      'Custom Web Applications and Portals',
      'Tailored Mobile Apps (Android and iOS)',
      'Enterprise System Integration',
      'Bespoke ERP and CRM Solutions',
      'Business Intelligence and Analytics Dashboards',
      'Workflow Automation',
      'Document Management Systems',
      'Business Management Systems',
      'School Management Systems',
      'Hospital Management Systems',
      'SACCO Management Systems',
      'Inventory Management Systems',
      'Fleet Management Systems',
      'E-commerce Platforms',
    ],
  },
  {
    id: 'managed',
    title: 'Managed IT Services',
    description: 'Proactive IT support and monitoring that keeps your systems running, secure, and cost effective.',
    icon: 'LifeBuoy',
    featured: true,
    chips: [
      'Help Desk Support',
      'Preventive Maintenance',
      'Corrective Maintenance',
      'Remote Support',
      'On-site Technical Support',
      'Annual Maintenance Contracts (AMC)',
      'IT Asset Management',
      'System Monitoring',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: 'Shield',
    featured: true,
    chips: [
      'Network Security',
      'Firewall Installation & Configuration',
      'Endpoint Protection',
      'Antivirus Solutions',
      'Data Backup & Recovery',
      'Vulnerability Assessments',
      'Security Audits',
      'Cybersecurity Awareness Training',
    ],
  },
]

export const allServices: ServiceCategory[] = [
  {
    id: 'infrastructure',
    title: 'ICT Infrastructure Solutions',
    description: 'LAN, WAN, Structured Cabling, Fibre Optic Installation, Wireless Network Solutions, Data Centre Setup, Server Installation & Configuration, Network Security, VPN Solutions, Internet Connectivity Solutions.',
    icon: 'Server',
  },
  {
    id: 'integration',
    title: 'Systems Integration',
    description: 'ERP Integration, Financial Systems Integration, HR Systems Integration, API Development & Integration, Third-Party Software Integration, Database Integration, Cloud Integration Services.',
    icon: 'GitMerge',
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'Cloud Migration, Microsoft 365 Solutions, Google Workspace Deployment, Cloud Backup, Disaster Recovery, Cloud Security, Cloud Hosting, Virtual Servers.',
    icon: 'Cloud',
  },
  {
    id: 'consultancy',
    title: 'ICT Consultancy',
    description: 'ICT Strategy Development, Digital Transformation, ICT Policy Development, ICT Audits, Systems Assessment, Project Management, Technology Advisory Services, Business Process Automation.',
    icon: 'Briefcase',
  },
  {
    id: 'security-systems',
    title: 'Security Systems',
    description: 'CCTV Surveillance Systems, Access Control Systems, Biometric Attendance Systems, Intruder Alarm Systems, Electric Fence Installation, Video Intercom Systems, Gate Automation, Visitor Management Systems.',
    icon: 'Camera',
  },
  {
    id: 'electrical',
    title: 'Electrical & Power Solutions',
    description: 'Electrical Installations, Electrical Maintenance, UPS Solutions, Generator Installation, Solar Power Systems, Power Backup Solutions, Power Distribution Systems, Energy Efficiency Solutions.',
    icon: 'Zap',
  },
  {
    id: 'supplies',
    title: 'General Supplies',
    description: 'Computers & Laptops, Servers, Printers & Scanners, Networking Equipment, Office Furniture, Office Equipment, Stationery, Electrical Materials, Software Licenses, Data Storage Devices, ICT Accessories.',
    icon: 'Package',
  },
  {
    id: 'training',
    title: 'Training & Capacity Building',
    description: 'ERP User Training, Microsoft Office Applications, Cybersecurity Awareness, Network Administration, ICT Skills Development, Digital Literacy, Software User Training, Systems Administration.',
    icon: 'GraduationCap',
  },
]
