export interface Client {
  name: string
  sector: string
  logo: string
  alt: string
  width?: number
  height?: number
}

export const featuredClients: Client[] = [
  { name: 'Busia County', sector: 'County Government', logo: '/clients/busia-county.png', alt: 'Busia County' },
  { name: 'Bomet University', sector: 'Educational Institution', logo: '/clients/bomet-university.png', alt: 'Bomet University' },
  { name: 'Kabianga University', sector: 'Educational Institution', logo: '/clients/kabianga-university.png', alt: 'Kabianga University' },
  { name: 'KTDA', sector: 'Private Company', logo: '/clients/ktda.png', alt: 'KTDA' },
  { name: 'Police Sacco', sector: 'Financial', logo: '/clients/police-sacco.png', alt: 'Police Sacco' },
]

export const clientGroups = [
  {
    sector: 'county',
    heading: 'County Governments',
    clients: [
      { name: 'Busia County', logo: '/clients/busia-county.png', alt: 'Busia County', width: 288, height: 254 },
    ],
  },
  {
    sector: 'education',
    heading: 'Educational Institutions',
    clients: [
      { name: 'Bomet University', logo: '/clients/bomet-university.png', alt: 'Bomet University', width: 517, height: 593 },
      { name: 'Kabianga University', logo: '/clients/kabianga-university.png', alt: 'Kabianga University', width: 250, height: 202 },
    ],
  },
  {
    sector: 'private',
    heading: 'Private Companies',
    clients: [
      { name: 'KTDA', logo: '/clients/ktda.png', alt: 'KTDA', width: 447, height: 447 },
    ],
  },
  {
    sector: 'financial',
    heading: 'Financial',
    clients: [
      { name: 'Police Sacco', logo: '/clients/police-sacco.png', alt: 'Police Sacco', width: 447, height: 447 },
    ],
  },
]
