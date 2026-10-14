# Superlan launch checklist

Status reviewed: **13 October 2026, Africa/Nairobi**.

The website is live and Google has indexed the homepage. Launch sign-off remains open for reliable enquiry delivery, director approval and operational ownership.

Use four statuses: **Done** for a recorded result, **Needs action** for an unfinished task, **Waiting** for an external result, and **Later** for an optional improvement. Every change to a status needs a date, evidence and a next action. Owner entries below describe the role to assign, rather than a confirmed named person.

## Current evidence and next actions

| Requirement | Status | Evidence and date | Proposed owner | Next action |
|---|---|---|---|---|
| Public pages and assets | Done | On 13 October, all 13 sitemap pages returned 200; favicon, social image and company-profile PDF returned 200; a missing page returned 404. | Site maintainer | Repeat relevant checks after publication. |
| Build, lint, types and contact behavior | Done | On 13 October, isolated production build, lint and TypeScript passed; all 11 contact tests passed. Tests replace SMTP and Redis and do not prove real delivery. | Site maintainer | Run checks after changes. |
| Published source baseline | Done | Before this documentation update, all 75 tracked files matched GitHub commit `54afed5774fd5fb9729140e95950a8268a936dd5`; its Website checks passed. | Site maintainer | Review the documentation proposal and checks before updating main. |
| Mobile layout and controls | Done, recorded QA | Local `release/browser-checks.json` records 52 checks at 360, 390, 768 and 1440 pixels with no reported issues; reviewed on 13 October. | Site maintainer | Repeat interaction and layout checks after UI changes. |
| Google domain ownership | Done | Search Console confirmed domain ownership on 13 October after the TXT record was saved in Cloudflare and publicly resolved. | Company account owner | Retain the Google TXT record and confirmed account access. |
| Sitemap processing | Done | Search Console reported Success with 13 discovered page URLs on 13 October. | Site maintainer | Maintain the sitemap as pages change. |
| Homepage indexing | Done | URL Inspection reported URL is on Google and Page is indexed on 13 October. | Site maintainer | Monitor actual search performance when data is available. |
| Other pages and search reports | Waiting / needs verification | Only homepage indexing has been individually confirmed; aggregate reports were processing on 13 October. Discovered pages are not an indexed-page count. | Site maintainer | Review the remaining URLs and coverage once data is available. |
| SMTP acceptance and quotations alias | Done, historical test | On 10 October (Africa/Nairobi), both website tests were received; a quotations alias test reached info's Inbox. Local evidence is in `release/email-delivery-checks.json`. | Mailbox administrator | Preserve the separate delivery and folder results. |
| Website enquiries reach the company Inbox | Done for the new test; monitor | The two 10 October tests landed in Spam. A newly authorized test on 13 October with an independent Reply-To address reached Inbox; no settings were changed. | Mailbox administrator / Truehost | Monitor new enquiries; obtain the provider's rule or score if Spam recurs. One test is not a guarantee for all messages. |
| Reply to an independent mailbox | Done for the approved test | On 13 October, the verification reply reached the approved Gmail Inbox. | Mailbox administrator | Continue monitoring correspondence; do not treat one provider test as universal delivery assurance. |
| Development dependency findings | Needs action | Audit on 13 October: zero production findings, five high development package findings. | Site maintainer | Review compatible remediation; avoid the suggested incompatible forced downgrade. |
| Published company details and privacy notice | Needs director confirmation | Company-profile content and a website privacy notice are present; final approval of details, client-logo permissions and enquiry handling is not recorded. | Directors | Confirm approved details, core values, public logo use, privacy contact and retention arrangements. |
| Account recovery, renewals and enquiry ownership | Needs confirmation | Named ownership and renewal/recovery procedures have not been verified in this review. | Company account owner | Assign responsibility for the mailbox, domain, hosting, Search Console and recoverable project/DNS copies. |
| Hosting plan suitability | Needs confirmation | The 9 October progress record noted Vercel Hobby; the current account plan has not been rechecked. [Vercel guidance](https://vercel.com/docs/plans/hobby) limits Hobby to personal, non-commercial use. | Company account owner | Confirm an appropriate plan before launch sign-off. No billing change is included. |
| Updated launch documentation | Prepared; main publication pending | README, progress and deployment notes distinguish SMTP receipt, Spam, Google verification and homepage indexing. | Site maintainer | Review the documentation update and its checks, then publish approved changes to main. |

## Work that can follow later

| Improvement | Dependency | Completion evidence |
|---|---|---|
| Case studies and testimonials | Approved client names, project scope, results, quotations and photos | Published case studies with verified outcomes and publication permission. |
| Leadership and certifications | Director-approved biographies, photos and credential details | Approved profiles and valid certification/partner information. |
| CSR, vacancies and company news | Actual dated activities or available roles | Pages reflect documented activity and a confirmed application/contact route. |
| Official social links | Director-confirmed URLs | Links open the correct official profiles. |
| Service terms | Approved business conditions | Terms reflect the company's actual services and agreements. |
| Performance and usability improvements | Measured mobile behavior and performance | Before/after measurements and interaction checks demonstrate the improvement. |
| Visitor and enquiry measurement | Agreed measurement goals and appropriate privacy-notice changes | Useful reporting exists and matches the published notice. |

## Definition of launch sign-off

A successful build proves the application can be built. A working public URL proves availability. SMTP acceptance proves that the email provider accepted a message. Each result is recorded separately from Inbox placement, return correspondence, search indexing and company approval.

Do not mark the whole launch complete while required items remain open. Google ranking and optional future content improvements are ongoing work rather than a guaranteed launch outcome.

Private delivery evidence and account/service identifiers belong in the ignored `release/` directory. Public documentation must not contain mailbox passwords, API tokens, private customer enquiries or personal account details. Preserve historical test dates when adding a newer review or test.
