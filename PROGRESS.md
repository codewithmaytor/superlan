# Superlan website progress

Last checked: 13 October 2026, Africa/Nairobi.

Use [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md) for the dated launch requirements, evidence, proposed owners and next actions. This summary distinguishes completed work from open sign-off items.

## Completed website work

- Approved layout, contrast, font, service-card, mobile hero and padded footer fixes.
- Mobile menu close controls, Escape, focus handling and background scroll lock.
- WhatsApp placement that avoids forms, service tags and the footer.
- Company-profile download, profile-backed About content, selected past clients, delivery process and clickable footer contact details.
- Featured-client carousel with one, two or three visible clients by viewport, keyboard controls, pause/resume, hover/focus pause and reduced-motion support.
- Accessible client sector filters and controllable home logo animation.
- Next.js 16.4.0, React 19.3.0, Tailwind CSS 4.3.3, compatible icon/types, flat ESLint configuration and self-hosted licensed variable Roboto.
- Responsive home core-services strip and checked font weights.
- Shared canonical and social metadata, company/website structured data, brand-derived social image, icon and favicon.
- Three service/project guides with category filters and static detail pages; profile-backed Projects enquiry route without fabricated case studies.
- Privacy notice, custom missing/error pages, security response headers and removal of unconfigured social links and automatic map loading.
- Encrypted authenticated SMTP, fixed company sender/recipient, visitor Reply-To and shared Upstash submission limits with failure handling.
- Environment template, Node.js 22 requirement, secret/build ignores, Vercel configuration and GitHub checks.

## Deployment and discovery

- Source repository: https://github.com/codewithmaytor/superlan. Before this documentation update, all 75 tracked files matched main commit `54afed5774fd5fb9729140e95950a8268a936dd5`, whose Website checks passed.
- Public site: https://superlan.co.ke, deployed by Vercel from main. HTTPS and the permanent www redirect were checked.
- Active DNS is managed in Cloudflare. Website routing uses Vercel's project values; Truehost email records were preserved.
- Truehost's verification record was added to Cloudflare and its activation warning cleared. The info mailbox and quotations alias are active.
- SMTP was configured and real delivery tested on 10 October 2026 (Africa/Nairobi). Both original website messages arrived in Spam; the alias test reached Inbox.
- On 13 October, a newly authorized website enquiry with an independent Reply-To address reached the company Inbox. Earlier Spam results remain recorded; one successful test does not establish delivery reliability for every enquiry.
- Google domain ownership was verified on 13 October. Search Console processed the sitemap successfully with 13 discovered pages and confirmed the homepage is indexed. Other pages' indexing and rankings have not been individually verified.

## Verification

- On 13 October, production build, lint and TypeScript passed. All 11 contact tests passed using SMTP/Redis test doubles; those tests send no real mail.
- Public checks on 13 October: all 13 sitemap pages returned 200, key downloads/images returned 200 and a missing page returned 404.
- Earlier recorded browser QA covered 13 pages at 360, 390, 768 and 1440 pixels, 52 page/viewport combinations, with no reported horizontal overflow, broken loaded images or dead hash links. These are historical QA results, not a new full browser run on 13 October.
- Recorded news filter/navigation, menu, carousel, configured-form validation and service-failure checks passed.
- Production dependency audit on 13 October: zero findings. Full audit: five high development package findings in the lint dependency chain. A compatible remediation is still required; do not force an incompatible lint-config downgrade.

## Open launch items

1. The approved verification reply reached the independent Gmail Inbox on 13 October. Continue monitoring enquiry delivery; ask Truehost for the classification rule or score if Spam recurs.
2. Review other important URLs in Search Console when coverage data becomes available. Sitemap discovery is separate from indexing and ranking.
3. Obtain director approval for published details, logo permissions, privacy contact, retention arrangements and enquiry ownership.
4. Assign mailbox monitoring, account recovery, domain/email/hosting renewals and recoverable source/DNS copies.
5. Confirm the current Vercel plan suits this company website. The 9 October record noted Hobby, but the account plan has not been rechecked. Vercel's [Hobby guidance](https://vercel.com/docs/plans/hobby) restricts that plan to personal, non-commercial use. No paid upgrade has been made in this work.
6. Review the documentation proposal and checks before publishing it to main.

The site is live and its homepage is indexed. Whole-launch sign-off remains open while the required items above are unresolved.

## Later improvements requiring company material

- Approved project scopes, results, dates, photos and testimonials.
- Leadership biographies/photos, certifications and permitted partner badges.
- Supported ERP platforms, actual coverage hours and agreed response times.
- Documented CSR activities, real company announcements and confirmed vacancies.
- Official social URLs, service terms and clarification of whether Sustainability remains a core value.
- Measured performance, usability and visitor/enquiry reporting improvements.
