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
2. Use the shared metadata helper so the page includes its canonical URL and social preview image:

```ts
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata(
  '/new-page',
  'Page Title - Superlan East Africa Limited',
  'Page description.',
)
```

3. Add the route to `lib/nav-items.ts` if it should appear in the header/footer navigation.

4. Add a new static page to `app/sitemap.ts`. News article routes are included automatically from `lib/news-data.ts`; avoid duplicating those entries.

5. After publication, verify the page returns 200, its canonical URL uses the primary domain, and the public sitemap includes it. Record any indexing check separately in [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md).

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

The sender and recipient are fixed server configuration; visitors are Reply-To only. Encrypted SMTP and certificate validation are required. Success is returned only when the provider accepts the message. Redis stores short-lived counters keyed by a hash of the email address, not enquiry contents. Limits are three requests per email and thirty globally in ten minutes. Limiter errors/timeouts fail closed.

Production SMTP is configured, and the live form was present in the 13 October 2026 review. Two authorized website tests on 10 October 2026 (Africa/Nairobi) were accepted and received in the company mailbox, but both were classified as Spam. The quotations alias test reached the Inbox. A newly authorized test on 13 October with an independent Reply-To address reached the company Inbox. This confirms that test result only; the approved verification reply also reached the independent Gmail Inbox. Continue monitoring future enquiry delivery. Provider acceptance is the condition for the form's success message; it does not prove Inbox placement. Track those separate checks in [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md).

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

The favicon and browser icon are derived from the existing company logo. The News page contains three original service/project guides with category filters and static detail pages. Projects uses profile-backed past-client names and a project enquiry route; no fabricated case studies are included. Unconfigured social profiles are omitted. A website privacy notice and custom missing/error pages are included. The source is published at https://github.com/codewithmaytor/superlan and deployed to https://superlan.co.ke, with a verified HTTPS www redirect. Truehost SMTP is active and the 13 October enquiry test reached Inbox; the approved reply reached the independent Gmail Inbox. Continue monitoring future enquiries.

On 13 October 2026, the Superlan domain property was verified in Google Search Console through Cloudflare DNS. Google successfully processed the sitemap and discovered all 13 page URLs. The homepage indexing request was accepted, and a subsequent URL Inspection reported that the homepage is indexed. Indexing of the remaining pages and search performance require separate checks. Keep the Google verification TXT record in the active DNS zone.

Roboto is self-hosted through `next/font/local` using the licensed font under `app/fonts/`. Production builds do not contact Google Fonts.

## Dependency audit status (13 October 2026)

The framework is Next.js 16.4.0 with React 19.3.0 and Tailwind CSS 4.3.3. The 13 October review found zero production findings with `npm audit --omit=dev`. The full audit reports five high package findings along the `eslint-config-next -> @next/eslint-plugin-next -> fast-glob -> micromatch -> braces` development dependency chain. Compatible remediation remains open; see the advisory at https://github.com/advisories/GHSA-vfj7-8cjw-p6xm. Do not use `npm audit fix --force`, which currently proposes downgrading the lint configuration to an incompatible framework version.

ESLint 9 is retained because the Next.js lint configuration's React, import, and accessibility plugins declare support through ESLint 9. The package now carries an upstream end-of-support notice; a compatible plugin/config release is needed before moving to ESLint 10.

Development and production use the supported Webpack build option, avoiding Turbopack worker-port restrictions in this environment.

## Launch

The deployment target is Vercel from GitHub, with the domain and email at Truehost. Read [DEPLOYMENT.md](DEPLOYMENT.md) for repository upload, Vercel import, domain records, email-preserving DNS instructions, contact delivery and Search Console setup. Use [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md) for the dated status, evidence and next action for each launch requirement. `.github/workflows/check.yml` contains the CI checks, and `vercel.json` supplies the framework/build settings.

The website is live, and the homepage is indexed. Launch sign-off remains open for enquiry delivery, company approvals and operational ownership. A successful build or deployment alone does not close those items.
