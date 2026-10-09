# Superlan East Africa — Next.js Website

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 migration of the Superlan East Africa site.

## Prerequisites

- Node.js 22 LTS
- npm or pnpm

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

```
app/
  layout.tsx           # Root layout: Header, Footer, metadata, structured data, Roboto font
  page.tsx             # Homepage
  about/page.tsx
  services/page.tsx
  projects/page.tsx
  clients/page.tsx
  careers/page.tsx
  news/page.tsx
  csr/page.tsx
  contact/page.tsx
  globals.css          # Tailwind directives + global resets
  api/contact/route.ts # Contact form endpoint
  sitemap.ts
  robots.ts

components/
  Header.tsx
  Footer.tsx
  SlimPageHeader.tsx
  ServiceCard.tsx
  ProjectCard.tsx
  LogoMarquee.tsx
  FeaturedPartner.tsx
  LogoWall.tsx
  ContactForm.tsx
  WhatsAppButton.tsx

lib/
  site-config.ts       # Company info, social links, address
  nav-items.ts         # Navigation links
  services-data.ts     # Services list and flagship services
  clients-data.ts      # Client logos and sector groupings

public/
  logo.svg
  og-image.png         # 1200x630 social preview image
  clients/             # Client logo images
  images/              # General images
```

## Adding a New Page

1. Create `app/<route>/page.tsx`
2. Export a `metadata` object for SEO:

```ts
export const metadata = {
  title: 'Page Title - Superlan East Africa Limited',
  description: 'Page description.',
  openGraph: {
    title: 'Page Title - Superlan East Africa Limited',
    description: 'Page description.',
    url: 'https://superlan.co.ke/<route>',
    siteName: 'Superlan East Africa Limited',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title - Superlan East Africa Limited',
    description: 'Page description.',
  },
}
```

3. Add the route to `lib/nav-items.ts` if it should appear in the header/footer navigation.

## Where Content Lives

- **Navigation links:** `lib/nav-items.ts`
- **Services data:** `lib/services-data.ts`
- **Client data:** `lib/clients-data.ts`
- **Company info, address, social links:** `lib/site-config.ts`
- **Repeated UI patterns:** `components/` (ServiceCard, ProjectCard, LogoMarquee, FeaturedPartner, LogoWall, ContactForm)

## Icons

This project uses [lucide-react](https://lucide.dev/) for UI icons. Brand social icons (Facebook, LinkedIn, X/Twitter, Instagram) use inline SVG because lucide does not include brand marks.

Common icons used:
- Navigation: `Menu`, `X`
- Contact: `MapPin`, `Phone`, `Mail`, `Globe`, `Clock`
- Services: `Monitor`, `Code2`, `Shield`, `Server`, `GitMerge`, `Cloud`, `Briefcase`, `LifeBuoy`, `Camera`, `Zap`, `Package`, `GraduationCap`
- Careers: `GraduationCap`, `Users`, `Heart`, `Smile`
- CSR: `GraduationCap`, `Shield`, `Monitor`, `Users`, `Star`, `Award`

Inline SVG icons are also used for decorative elements (timeline dots, checkmarks, vision/mission icons, page header watermark).

## Design Tokens

All colors, spacing, radius, and shadow values are defined in `tailwind.config.cjs` under `theme.extend`. Use the named token classes in components:

- Colors: `bg-primary`, `text-on-primary`, `bg-surface-container`, `text-on-surface-variant`, `bg-tertiary`, etc.
- Radius: `rounded-xs`, `rounded-small`, `rounded-m`, `rounded-large`, `rounded-xl`, `rounded-xxl`, `rounded-full`
- Shadows: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`

## Contact Form

The contact form is a client component (`components/ContactForm.tsx`) that POSTs to `/api/contact/route.ts`. Client and server share validation in `lib/contact-validation.ts`. Requests must contain JSON and stay within 16 KB. A hidden website field rejects basic automated submissions. Personal form data is not written to console logs.

Email delivery uses server-only Truehost SMTP settings and shared Upstash rate limiting. Both must be configured before the contact page displays the form. The connected Vercel Marketplace database provides the KV REST variable pair; direct Upstash variables are also supported as a complete pair. Until then, visitors receive phone and WhatsApp enquiry options. The public mailbox is also hidden while `NEXT_PUBLIC_EMAIL_ENABLED` is false. See `.env.example` and [DEPLOYMENT.md](DEPLOYMENT.md).

The sender and recipient are fixed server configuration; visitors are Reply-To only. Encrypted SMTP and certificate validation are required. Success is returned only when the provider accepts the message. Redis stores short-lived counters keyed by a hash of the email address, not enquiry contents. Limits are three requests per email and thirty globally in ten minutes. Limiter errors/timeouts fail closed. Production SMTP delivery still needs an inbox test once the real mailbox works.

`npm test` runs eleven contact checks with SMTP/Redis replaced by test doubles, covering acceptance/rejection, encryption settings, validation/header injection, honeypot, request limits, origins, shared rate limiting and limiter outages and Marketplace credential pairing. No external emails are sent by those tests.

## Build

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Metadata and Accessibility

All main pages and guide pages use `lib/metadata.ts` for a unique canonical URL, Open Graph metadata, and Twitter preview image. Company and website structured data comes from `lib/site-config.ts`; add official social URLs there when confirmed. Do not add unverified ratings, certifications, opening hours, or project statistics.

Featured clients show one item on narrow screens, two on tablets, and three on desktop. Rotation pauses on hover, keyboard focus, hidden browser tabs, or an explicit Pause action. Manual navigation pauses rotation; reduced-motion visitors receive manual controls only. Sector filters use toggle-button semantics and announce the result count.

Run these verification commands before deployment:

```bash
npm run lint
npm test
npm run build
npm run typecheck
```

The favicon and browser icon are derived from the existing company logo. The News page contains three original service/project guides with category filters and static detail pages. Projects uses profile-backed past-client names and a project enquiry route; no fabricated case studies are included. Unconfigured social profiles are omitted. A website privacy notice and custom missing/error pages are included. The source is published at https://github.com/codewithmaytor/superlan and deployed to https://superlan.co.ke, with a verified HTTPS www redirect. Truehost info mailbox and quotations alias exist; actual email delivery and SMTP activation remain to be completed.

Roboto is self-hosted through `next/font/local` using the licensed font under `app/fonts/`. Production builds do not contact Google Fonts.

## Dependency audit status (9 October 2026)

The framework is Next.js 16.4.0 with React 19.3.0 and Tailwind CSS 4.3.3. `npm audit --omit=dev` reports zero findings. The full audit still reports five high findings along the `eslint-config-next -> @next/eslint-plugin-next -> fast-glob -> micromatch -> braces` development dependency chain. The upstream braces advisory has no published patch: https://github.com/advisories/GHSA-vfj7-8cjw-p6xm. Recheck this before launch. Do not use `npm audit fix --force`, which currently proposes downgrading the lint configuration to an incompatible framework version.

ESLint 9 is retained because the Next.js lint configuration's React, import, and accessibility plugins declare support through ESLint 9. The package now carries an upstream end-of-support notice; a compatible plugin/config release is needed before moving to ESLint 10.

Development and production use the supported Webpack build option, avoiding Turbopack worker-port restrictions in this environment.

## Launch

The deployment target is Vercel from GitHub, with the domain and email at Truehost. Read [DEPLOYMENT.md](DEPLOYMENT.md) for repository upload, Vercel import, domain records, email-preserving DNS instructions and contact activation. `.github/workflows/check.yml` contains the CI checks, and `vercel.json` supplies the framework/build settings.
