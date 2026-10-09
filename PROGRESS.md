# Superlan website progress

Last checked: 9 October 2026.

## Completed

- Initial audit and approved layout, contrast, font, service-card, and mobile hero fixes.
- Mobile menu close controls, Escape, focus handling, and background scroll lock.
- WhatsApp placement that avoids forms, service tags, and the footer.
- Company-profile download, updated About content, selected past clients, delivery process, and clickable footer contact details.
- Featured-client carousel showing one item on mobile, two on tablets, and three on desktop.
- Carousel previous/next controls, arrow-key navigation, explicit pause/resume, pause on hover/focus, and reduced-motion handling.
- Accessible sector filters, result announcements, and readable client names alongside logos.
- Home logo animation pause control and reduced-motion layout without duplicated logos.
- Framework upgrade to Next.js 16.4.0, React 19.3.0, and compatible icon/type dependencies.
- Tailwind CSS 4.3.3 migration, updated class-merging helper, and preserved corner-radius tokens.
- ESLint flat configuration and separate lint/typecheck scripts.
- Self-hosted variable Roboto font with working regular/medium/bold weights and included SIL Open Font License.
- Bold core-services strip immediately below the home hero, with gold dot separators, one line from 640 pixels, and two balanced lines on narrow mobile screens.
- Shared canonical URLs, Open Graph/Twitter metadata on all nine pages, and company/website structured data.
- Clearer social preview image, browser icon, and favicon from the existing brand assets.
- Basic response security headers and removal of the framework identification header.

## Verification

- `npm run build`: passed with no warnings using the supported Webpack build option.
- `npm run lint`: passed with zero warnings/errors.
- `npm run typecheck`: passed.
- Comprehensive browser checks from the preceding stage: all nine pages at 360, 390, 768, and 1440 pixels, 36 page/viewport combinations.
- No browser JavaScript errors, broken images, or horizontal overflow in those checks.
- Carousel buttons, arrow keys, pause/resume, hover/focus pause, responsive resizing, keyboard filters, and mobile-menu Escape checked.
- Canonical URLs, social image metadata, structured data, asset downloads, sitemap, robots, and response headers checked.
- The mobile hero Contact Us button fits in a 360x640 viewport.
- Latest home-service strip checked at 360, 390, 640, 768, 1024, and 1440 pixels, including actual variable-font weight support and overflow.
- All nine pages rechecked at 360 and 1440 pixels after the variable-font correction, with no JavaScript errors, broken images, or horizontal overflow.
- `npm audit --omit=dev`: zero findings after the final dependency changes.

## Launch work completed in the current stage

- Confirmed the deployment plan: GitHub source, Vercel hosting, Truehost domain/email, `superlan.co.ke` as the primary domain.
- Replaced fake news dates and Coming Soon cards with three original guides grounded in the services and company profile.
- Added working accessible news category filters, keyboard operation, three static article routes, article metadata and sitemap entries.
- Replaced project placeholders with profile-backed past-client names, company-profile download, project enquiry and briefing guide.
- Removed dead social links; footer now links to service sections, privacy notice, phone and WhatsApp.
- Added a factual website privacy notice, custom 404 page and recoverable error page.
- Removed automatic embedded Google Maps loading and provided an explicit location link.
- Removed unconfirmed office hours and the unsupported live-online WhatsApp indicator.
- Careers directs people to ask about roles instead of sending CVs to an unconfigured mailbox.
- Prepared encrypted Truehost SMTP delivery with fixed sender/recipient, visitor Reply-To, timeouts and provider-acceptance checks.
- Added shared Upstash submission limits and failure handling across Vercel function instances.
- Contact form activates only with SMTP and rate-limit configuration; public mailbox display is separately gated until verified.
- Contact page currently provides phone/WhatsApp enquiry and quotation routes while email setup is pending.
- Added `.env.example`, safer secret/build ignores, Node.js 22 requirement, Vercel configuration and GitHub CI checks.
- Added DEPLOYMENT.md with email-preserving DNS instructions, SMTP setup, production acceptance and rollback.
- Public DNS uses Cloudflare nameservers and Truehost Workplace MX records; the guessed mail.superlan.co.ke host did not resolve. The deployment notes reflect the observed routing.
- Signed-in Truehost inspection confirmed an active Workplace Starter email service for Superlan and no purchased website hosting service in this account.
- Diagnosed the email activation warning: the required `truehost_verification` TXT record exists in Truehost's old DNS zone but is absent from live DNS. Truehost's domain page confirms DNS management moved to Cloudflare; future DNS edits belong there. Live MX, SPF, DMARC and the `smarthost._domainkey` DKIM record are present.

## Latest verification

- Production build, lint and typecheck passed.
- Nine contact tests passed using SMTP/Redis test doubles; no real email sent. Covers provider acceptance/rejection, encrypted ports, request validation/injection, honeypot, body/content-type limits, foreign origins, reverse-proxy origin handling, shared rate limiting and limiter outages.
- 13 pages at 360, 390, 768 and 1440 pixels: 52 page/viewport checks. No horizontal overflow, broken loaded images or dead hash links; each page has one H1 and the correct canonical URL.
- News filter mouse/keyboard interactions and article navigation passed; no browser JavaScript errors in the checked pages.
- Isolated configured-form browser check: empty-field errors focus the first field; service failure shows an error with phone fallback, preserves input and re-enables submission.
- 19 page/asset HTTP checks, two missing-page 404 checks, 13 sitemap URLs and response security headers passed.
- Production dependency audit: zero vulnerabilities after installing delivery/rate-limit packages.

## Remaining for publication

1. Upload the prepared source to the empty public repository `codewithmaytor/superlan`. GitHub and Vercel browser accounts are signed in. A clean Git repository with all 74 release files has been prepared under `/tmp/superlan-source`; the workspace `.git` remains an empty read-only placeholder. Broad GitHub CLI authentication was rejected by automatic approval review. A seven-day fine-grained token request for this repository only has been prepared for the user to approve, with Contents and Workflows write access and required Metadata read access. No token has been generated by the agent and no source has been pushed.
2. Deploy and verify the generated URL after source upload. Truehost inspection is complete: the account has email services, with no website hosting plan to use for this app. The current Vercel account is Hobby; its published policy restricts commercial use. No production deployment has been created yet.
3. Add apex and www domains in Vercel, apply its exact website DNS records in the active Cloudflare zone, preserve email records, verify HTTPS and www redirect.
4. Add Truehost's missing domain-verification TXT record in the active Cloudflare zone, then recheck verification in Truehost. Repair and test `info@superlan.co.ke`; create `quotations@superlan.co.ke` when ready. Mailbox existence and delivery remain unverified because the product page blocks mailbox management pending domain verification. Email addresses use @, not dotted subdomain names.
5. Add SMTP and Upstash secrets in Vercel, enable the public email flag after verification, redeploy and confirm real inbox receipt/reply behavior.
6. Confirm company content, logo publication rights and privacy notice before public promotion. Detailed case studies, leadership, testimonials, certifications and actual CSR/news events can be added when approved material is supplied.

## Tooling follow-up

- Five high audit findings remain in the development-only lint chain, stemming from `braces`. Its upstream advisory lists no patched version: https://github.com/advisories/GHSA-vfj7-8cjw-p6xm. Do not force an incompatible lint-config downgrade.
- ESLint 9 has an upstream end-of-support notice. Move to ESLint 10 when the Next.js plugin/config combination supports it.

## Company material for future enrichment

- Completed projects with scope, results, dates and approved photos.
- Leadership names, roles, biographies and professional photos.
- Client publication permissions, official spellings, approved logos and testimonials.
- Certifications, partnership evidence and permitted badges.
- Supported ERP platforms, support coverage/hours and agreed response times.
- Documented CSR activities, real announcements, confirmed vacancies and official social URLs.
- Clarification of whether Sustainability remains a core value.
