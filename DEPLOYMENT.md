# Superlan launch: GitHub, Vercel and Truehost

Domain: `superlan.co.ke`. Primary address: `https://superlan.co.ke`.
Code belongs in GitHub; Vercel hosts the Next.js app; Truehost provides the domain registration and email. Public DNS currently delegates to Cloudflare, so changes must be applied in the active Cloudflare zone (or through a provider panel that actually manages that zone).

## 1. Verify and publish the code

Use Node.js 22. Run `npm ci`, `npm run lint`, `npm test`, `npm run build` and `npm run typecheck`. The build uses Webpack and self-hosted fonts. Do not use GitHub Pages or static export: the contact endpoint requires a server runtime.

This workspace's `.git` directory is an empty, read-only placeholder, not a functioning repository. The release ZIP contains only the application source and public assets. A clean Git repository has been prepared at `/tmp/superlan-source`, with `main` targeting the user-created public repository `https://github.com/codewithmaytor/superlan.git`. Source upload is pending. Do not upload the ZIP itself as the website source. Include dotfiles such as `.github`, `.gitignore` and `.env.example`.

Never commit mailbox passwords, Redis tokens, local `.env` files, `.vercel`, `node_modules`, `.next`, or local agent/account directories. The included GitHub workflow checks lint, contact behavior, production build, types and production dependency vulnerabilities on pushes and pull requests.

## 2. Import into Vercel

In Vercel, import the GitHub repository. Select the correct account/team, Next.js framework, repository root and Node.js 22. Keep `npm ci` as the install command and `npm run build` as the build command. `vercel.json` supplies these commands. Set the production branch to `main` if that is the branch used in GitHub.

Deploy first to the generated Vercel address. With no email settings, the contact page displays phone and WhatsApp enquiry options. It does not show a form that cannot deliver. The public email address remains hidden until `NEXT_PUBLIC_EMAIL_ENABLED=true` is set and the site is rebuilt.

The included workflow is ready but has not run on GitHub until the repository is uploaded. Vercel account login must also be valid; the existing local CLI token was invalid when checked.

## 3. Connect the domain without disrupting email

Add `superlan.co.ke` and `www.superlan.co.ke` in Vercel project Settings → Domains. Make the apex domain primary and redirect `www` to it. Copy the exact A/CNAME values Vercel displays for this project; do not use an old generic IP or guessed CNAME.

The public DNS check found no apex A/AAAA records and no www hostname, so website routing still needs to be configured. Keep the current Cloudflare nameservers (`jillian.ns.cloudflare.com` and `norm.ns.cloudflare.com`). In the active Cloudflare DNS zone, replace only the website records for the apex (`@`) and `www` with the values Vercel requests. Inspect existing A, AAAA and CNAME conflicts for those two names. Preserve MX, SPF TXT, DKIM, DMARC, `mail`, webmail and other service records. If the MX target is the apex rather than a dedicated mail hostname, ask Truehost for the correct mail target before changing the apex A record. Otherwise incoming mail could be redirected to the website host. If a `mail` CNAME points to the apex, replace it with the provider-approved mail server record as part of that email repair.

After DNS propagation, check both domains in Vercel for valid configuration and an issued HTTPS certificate. Test the apex website and the `www` redirect. Ownership verification alone does not confirm the routing or certificate is ready.

Official instructions: [Vercel custom domain setup](https://vercel.com/docs/domains/set-up-custom-domain).

## 4. Fix and test Truehost mailboxes

The signed-in account has an active Workplace Starter email package for Superlan, but no website hosting package. Its domain page confirms DNS management has moved to Cloudflare. The Truehost DNS manager still displays a separate Cloudoon zone; changes there do not automatically update the active Cloudflare zone.

The email product currently reports a missing domain ownership record. Add TXT name `truehost_verification` (full name `truehost_verification.superlan.co.ke`), value `verify_x8alxdhkhraa`, TTL 3600, in the active Cloudflare zone. The same record already exists in Truehost's old zone; do not add a duplicate there. Then use the product's Verify DNS Records action and confirm the warning clears. Live DKIM selector `smarthost._domainkey` currently matches the provider's displayed public key and must be preserved.

The intended enquiry mailbox is `info@superlan.co.ke`. The future quotation mailbox is `quotations@superlan.co.ke`; this is an email address, not `quotations.superlan.co.ke`.

The public MX records currently point to `workplaceproemail.com` (priority 10), `workplaceproemail.net` (20) and `workplace.truehost.cloud` (50). This indicates Truehost Workplace email routing; it does not confirm that a mailbox has been created or that its login works. The domain also publishes SPF `v=spf1 include:_spf.cloudoon.com ~all` and a DMARC quarantine policy. Preserve these records while changing the website.

Start with Truehost Workplace webmail at [workplace.truehost.cloud/appsuite](https://workplace.truehost.cloud/appsuite), using the account details supplied by Truehost. Confirm the email product is active and the exact `info@superlan.co.ke` mailbox exists. Use the product's client settings or Truehost support for the outgoing SMTP hostname and certificate name. `mail.superlan.co.ke` did not resolve in the public DNS check, so do not use that guessed hostname. A Workplace product does not necessarily use cPanel.

Supported secure options in this app are SMTP port 465 with TLS or port 587 with required STARTTLS. Send from webmail to an independent mailbox, reply to it, and check inbox/spam folders. Confirm the provider's required DKIM record in the active DNS zone; the selector is account-specific and was not inferred from public records.

Reference: [Truehost Workplace getting-started guide](https://truehost.com/support/knowledge-base/getting-started-with-truehost-workplace-email/).

## 5. Enable website message delivery

Create a Redis database through Upstash or Vercel Marketplace. Supply these server-only environment values in Vercel, following `.env.example`:

- `SMTP_HOST`, `SMTP_PORT` (465 or 587), `SMTP_USER`, `SMTP_PASSWORD`
- `CONTACT_FROM`: authenticated company mailbox address
- `CONTACT_TO`: working destination mailbox; initially `info@superlan.co.ke`
- `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`

Both valid SMTP configuration and shared rate-limit configuration are needed before the form appears. The server requires encrypted SMTP with certificate validation. It uses a fixed company sender and recipient and places the visitor's address in Reply-To. Provider rejection, delivery errors or a rate-limit timeout return failure; they never claim the message was sent.

The shared limits are three requests per hashed email address and thirty globally in ten minutes. No message body or raw email address is stored in Redis. These limits protect across serverless instances; they are basic abuse controls and can be adjusted to real traffic. Upstash's timeout allowance is explicitly treated as unavailable protection, so no email is sent on that path.

Set `NEXT_PUBLIC_EMAIL_ENABLED=true` only after the public mailbox is verified. This is a public display flag, not a credential. It requires a rebuild. Redeploy after changing environment settings. Keep preview environments pointed at test destinations if testing there.

Submit one authorized test from the website and confirm it arrives in the destination inbox with the correct Reply-To. Reply once and confirm the reply reaches the test sender. Our automated tests replace SMTP and Redis; they verify application behavior but do not establish real Truehost delivery.

## 6. Production acceptance

- Check every main page, the three guide pages, privacy notice and a missing page at mobile and desktop sizes.
- Check phone/WhatsApp links, service anchors, navigation, client controls and profile download.
- Check canonical URLs, social image, favicon, sitemap and robots on the public domain.
- Verify HTTPS, apex/`www` redirect and preservation of incoming/outgoing email.
- Verify the contact success/error and rate-limit behavior after enabling the form.
- Confirm public logo permissions, company details and the website privacy notice with the company owner.
- Add real case studies, leadership, certifications and social profiles only when approved material is available. The launch version makes no invented project-outcome or testimonial claims.

Runtime dependency audit currently has zero findings. Five high findings remain in the development-only lint chain; the upstream braces advisory has no published patch. See README. Never use an incompatible forced downgrade as a launch fix.

## Rollback

Vercel retains earlier deployments. If a release introduces a problem, promote the previous known-good deployment. Keep a copy of the original active DNS records before changing them so website routing can be restored if needed. Do not restore or alter mail records unless a specific email change is being rolled back.
