# Superlan launch: GitHub, Vercel and Truehost

Domain: `superlan.co.ke`. Primary address: `https://superlan.co.ke`.
Code belongs in GitHub; Vercel hosts the Next.js app; Truehost provides the domain registration and email. Public DNS currently delegates to Cloudflare, so changes must be applied in the active Cloudflare zone (or through a provider panel that actually manages that zone).

## 1. Verify and publish the code

Use Node.js 22. Run `npm ci`, `npm run lint`, `npm test`, `npm run build` and `npm run typecheck`. The build uses Webpack and self-hosted fonts. Do not use GitHub Pages or static export: the contact endpoint requires a server runtime.

This workspace's `.git` directory is an empty, read-only placeholder, not a functioning repository. The release ZIP contains only the application source and public assets. A temporary Git repository was used to publish source to `https://github.com/codewithmaytor/superlan.git` on 9 October 2026. Before future publication, use a valid Git checkout or the connected GitHub repository tools and confirm the remote, branch and changed files; do not depend on an old `/tmp` checkout still being available. Do not upload the ZIP itself as the website source. Include dotfiles such as `.github`, `.gitignore` and `.env.example`.

On 13 October 2026, all 75 tracked files in this workspace matched GitHub commit `54afed5774fd5fb9729140e95950a8268a936dd5`, before the launch-documentation update. The latest [Website checks run](https://github.com/codewithmaytor/superlan/actions/runs/37985741568) passed for that commit. Documentation changes made after that comparison need review and checks before publication to main.

Never commit mailbox passwords, Redis tokens, local `.env` files, `.vercel`, `node_modules`, `.next`, or local agent/account directories. The included GitHub workflow checks lint, contact behavior, production build, types and production dependency vulnerabilities on pushes and pull requests.

## 2. Import into Vercel

In Vercel, import the GitHub repository. Select the correct account/team, Next.js framework, repository root and Node.js 22. Keep `npm ci` as the install command and `npm run build` as the build command. `vercel.json` supplies these commands. Set the production branch to `main` if that is the branch used in GitHub.

Deploy first to the generated Vercel address. With no email settings, the contact page displays phone and WhatsApp enquiry options. It does not show a form that cannot deliver. The public email address remains hidden until `NEXT_PUBLIC_EMAIL_ENABLED=true` is set and the site is rebuilt.

Vercel project `superlan` is connected to `codewithmaytor/superlan` and deploys `main`. The generated production URL is https://superlan-two.vercel.app. Use the signed-in browser project settings for changes; the old local Vercel CLI credential is not usable.

Confirm the account plan suits a company website. The 9 October progress record noted Hobby; the current plan has not been rechecked. [Vercel Hobby guidance](https://vercel.com/docs/plans/hobby) limits that plan to personal, non-commercial use. Plan selection and billing remain the account owner's decision.

## 3. Connect the domain without disrupting email

Add `superlan.co.ke` and `www.superlan.co.ke` in Vercel project Settings → Domains. Make the apex domain primary and redirect `www` to it. Copy the exact A/CNAME values Vercel displays for this project; do not use an old generic IP or guessed CNAME.

Website routing is configured and verified. Both `@` and `www` use DNS-only CNAME records targeting `b669a8dd00154712.vercel-dns-017.com`, as displayed by this Vercel project. Vercel reports Valid Configuration; apex HTTPS returns 200 and www returns 308 to the apex while preserving the path. Cloudflare flattens the apex CNAME into public address answers. Keep the current Cloudflare nameservers (`jillian.ns.cloudflare.com` and `norm.ns.cloudflare.com`). In the active Cloudflare DNS zone, replace only the website records for the apex (`@`) and `www` with the values Vercel requests. Inspect existing A, AAAA and CNAME conflicts for those two names. Preserve MX, SPF TXT, DKIM, DMARC, `mail`, webmail and other service records. If the MX target is the apex rather than a dedicated mail hostname, ask Truehost for the correct mail target before changing the apex A record. Otherwise incoming mail could be redirected to the website host. If a `mail` CNAME points to the apex, replace it with the provider-approved mail server record as part of that email repair.

After DNS propagation, check both domains in Vercel for valid configuration and an issued HTTPS certificate. Test the apex website and the `www` redirect. Ownership verification alone does not confirm the routing or certificate is ready.

Official instructions: [Vercel custom domain setup](https://vercel.com/docs/domains/set-up-custom-domain).

## 4. Fix and test Truehost mailboxes

The signed-in account has an active Workplace Starter email package for Superlan, but no website hosting package. Its domain page confirms Cloudflare manages live DNS. On 9 October 2026, `truehost_verification.superlan.co.ke` TXT value `verify_x8alxdhkhraa` was added to that live zone with TTL 3600. Public resolution succeeded and the product's activation warning cleared. Live DKIM selector `smarthost._domainkey` matches the provider's displayed key and was preserved.

The user created `info@superlan.co.ke`; Truehost showed it Active with 3 GB quota. The Starter plan includes one mailbox and ten aliases. `quotations@superlan.co.ke` was added as an alias into the info inbox. On 10 October 2026 (Africa/Nairobi), authorized website tests proved authenticated SMTP acceptance and receipt, and the quotations alias test reached the info Inbox. Both website messages were classified as Spam. A newly authorized website test on 13 October with an independent Reply-To address reached Inbox without settings changes. The approved verification reply also reached the independent Gmail Inbox on 13 October. Preserve both historical and current results, and monitor future enquiries.

The public MX records currently point to `workplaceproemail.com` (priority 10), `workplaceproemail.net` (20) and `workplace.truehost.cloud` (50). This indicates Truehost Workplace email routing; it does not confirm that a mailbox has been created or that its login works. The domain also publishes SPF `v=spf1 include:_spf.cloudoon.com ~all` and a DMARC quarantine policy. Preserve these records while changing the website.

Start with Truehost Workplace webmail at [workplace.truehost.cloud/appsuite](https://workplace.truehost.cloud/appsuite), using the account details supplied by Truehost. Confirm the email product is active and the exact `info@superlan.co.ke` mailbox exists. Use the product's client settings or Truehost support for the outgoing SMTP hostname and certificate name. `mail.superlan.co.ke` did not resolve in the public DNS check, so do not use that guessed hostname. A Workplace product does not necessarily use cPanel.

Supported secure options in this app are SMTP port 465 with TLS or port 587 with required STARTTLS. The recorded successful website tests used `workplace.truehost.cloud` on port 587 with authenticated SMTP and STARTTLS. Ask Truehost to confirm the appropriate endpoint for this service when investigating the Spam classification.

With authorization, send a fresh website test using an independent reply-to mailbox, locate only the test message in info's Inbox or Spam, inspect its headers, and reply to that independent mailbox. Confirm the reply arrives and record its folder. SMTP acceptance, company Inbox placement and the return correspondence are separate results.

The local `release/email-delivery-checks.json` contains the historical and 13 October test evidence. The support draft in `release/truehost-spam-support-ticket.txt` asks for the provider's rule or score; it has not been submitted. Share only the test evidence approved by the user. Keep ordinary spam and malware protections enabled; request provider tracing if Spam recurs. Confirm the provider's required DKIM record in the active DNS zone; the selector is account-specific and should not be guessed.

Reference: [Truehost Workplace getting-started guide](https://truehost.com/support/knowledge-base/getting-started-with-truehost-workplace-email/).

## 5. Enable website message delivery

A free Upstash database is connected to Superlan through Vercel Marketplace. It supplies `KV_REST_API_URL` and `KV_REST_API_TOKEN`; the app accepts that complete pair automatically. Direct Upstash setup can instead use the complete `UPSTASH_REDIS_REST_URL`/`UPSTASH_REDIS_REST_TOKEN` pair. The URL and token must come from the same configuration; the app never mixes incomplete pairs. Production SMTP was configured and tested on 10 October 2026 (Africa/Nairobi), and the public contact form was present in the 13 October review. For a new deployment or configuration repair, use server-only Vercel settings following `.env.example`:

- `SMTP_HOST`, `SMTP_PORT` (465 or 587), `SMTP_USER`, `SMTP_PASSWORD`
- `CONTACT_FROM`: the company sender; recorded Production value `info@superlan.co.ke`
- `CONTACT_TO`: the company recipient; recorded Production value `info@superlan.co.ke`
- `SMTP_USER`: the authenticated mailbox; recorded Production value `info@superlan.co.ke`
- Redis REST URL/token pair: already supplied by the connected Marketplace integration

Both valid SMTP configuration and shared rate-limit configuration are needed before the form appears. The server requires encrypted SMTP with certificate validation. It uses a fixed company sender and recipient and places the visitor's address in Reply-To. Provider rejection, delivery errors or a rate-limit timeout return failure; they never claim the message was sent.

The shared limits are three requests per hashed email address and thirty globally in ten minutes. No message body or raw email address is stored in Redis. These limits protect across serverless instances; they are basic abuse controls and can be adjusted to real traffic. Upstash's timeout allowance is explicitly treated as unavailable protection, so no email is sent on that path.

Set `NEXT_PUBLIC_EMAIL_ENABLED=true` only after the public mailbox is verified. This is a public display flag, not a credential. It requires a rebuild. Redeploy after changing environment settings. Keep preview environments pointed at test destinations if testing there.

Submit one authorized test from the website and confirm it arrives in the destination inbox with the correct Reply-To. Reply once and confirm the reply reaches the test sender. Our automated tests replace SMTP and Redis; they verify application behavior but do not establish real Truehost delivery.

## 6. Google discovery and indexing

On 13 October 2026, the `superlan.co.ke` Domain property was verified in Google Search Console by adding Google's TXT record to the active Cloudflare zone. Manual TXT verification was used. Keep that record in DNS so the verified ownership remains valid.

The sitemap at `https://superlan.co.ke/sitemap.xml` was submitted successfully. Its initial fetch warning cleared, and the Sitemaps report showed **Success** with **13 discovered pages**. The homepage live test reported that the page can be indexed; its indexing request was accepted. A subsequent URL Inspection reported **URL is on Google** and **Page is indexed** for `https://superlan.co.ke/`. Manual actions and Security issues reported no issues detected.

These results confirm the homepage's indexing, not the indexing or ranking of every page. Review the remaining URLs as Search Console coverage data becomes available. Do not repeatedly submit the same URL to try to accelerate indexing. See [Google's crawling guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).

For future changes, maintain the sitemap, check the canonical URL and indexing rules, then inspect the affected page when appropriate. Record the actual result and date in [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md).

## 7. Production acceptance

Use [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md) as the current record of completed, open, waiting and later items. Record evidence before marking a requirement Done.

- Check every main page, the three guide pages, privacy notice and a missing page at mobile and desktop sizes.
- Check phone/WhatsApp links, service anchors, navigation, client controls and profile download.
- Check canonical URLs, social image, favicon, sitemap and robots on the public domain.
- Verify HTTPS, apex/`www` redirect and preservation of incoming/outgoing email.
- Verify the contact success/error and rate-limit behavior, company Inbox delivery and a reply to an independent mailbox.
- Confirm Google ownership, sitemap processing and the indexing status of the key pages separately from website availability.
- Confirm who owns enquiry handling, account recovery, renewals and maintenance, and where project and DNS backups are kept.
- Confirm public logo permissions, company details and the website privacy notice with the company owner.
- Add real case studies, leadership, certifications and social profiles only when approved material is available. The launch version makes no invented project-outcome or testimonial claims.

The 13 October 2026 audit found zero production dependency findings and five high package findings in the development-only lint chain. Compatible remediation remains open. See README. Never use an incompatible forced downgrade as a launch fix.

## Rollback

Vercel retains earlier deployments. If a release introduces a problem, promote the previous known-good deployment. Keep a copy of the original active DNS records before changing them so website routing can be restored if needed. Do not restore or alter mail records unless a specific email change is being rolled back.
