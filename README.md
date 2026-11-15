# Maven Care Lifeline Training Institute Website

This project is a responsive, multi-page static website built from the project brief and supplied visuals for Maven Care Lifeline Training Institute. The homepage and inner-page headers use an open, blended text-and-image composition, with a lightly glassed inquiry button on the homepage. It uses plain HTML, CSS, and JavaScript so it can be hosted without a build step.

## Project purpose

The site introduces the institution, highlights its course catalog, answers common questions, communicates the January 2027 intake, and directs learners to course information and a local inquiry message builder.

## Project structure

- The seven HTML pages remain at the project root for straightforward static hosting.
- `css/styles.css` — Shared design system and responsive layout
- `js/script.js` — Site configuration, course generation, mobile navigation, and inquiry behavior
- `assets/images/` — Images used by the current site
- `assets/icons/` — SVG icons used by the current site
- `docs/Maven_Care_Website_Build_Brief.md` — Original requirements brief
- `reference-materials/` — Preserved source assets and snapshots, not loaded by the current site

The original posters, alternate images, PNG icon copies, icon ZIP, organogram, and saved landing-page snapshot have been kept under `reference-materials/` for review. They were not deleted; review them before removing any.

The homepage featured-course cards and course catalog show skeleton placeholders while their JavaScript-rendered content initializes.

## Site configuration

Edit the `siteConfig` object at the top of `js/script.js`:

- `courses` — course names, durations, and fees
- `intakeLabel` — intake month/year and inquiry-message text
- `email` — official institute email address
- `phoneNumbers` — add only confirmed public phone numbers
- `whatsappNumber` — add the confirmed WhatsApp number in international digits-only format, without `+`
- `address` — the institute's confirmed public location
- `socialLinks` — Facebook and TikTok are configured; add other verified profiles here
- `tagline` — current institute tagline; update if it changes

WhatsApp links currently lead to the inquiry message builder instead of opening a live chat because the WhatsApp-enabled number has not been confirmed.

## Run locally

Open `index.html` directly in a browser, or serve the folder locally:

```bash
cd "C:\Users\MavineCare\Desktop\Mavencare"
python -m http.server 8000
```

Then visit:

- http://localhost:8000/

## Inquiry behavior

The contact form is a message builder, not a submission form. It validates the fields, prepares inquiry text, and attempts to copy it to the clipboard. If clipboard access is unavailable, the prepared text remains visible for manual copying. No message is sent or stored; email the copied text to the official address shown on the Contact page. A backend or confirmed WhatsApp destination is still needed for direct submissions.

## Important verification items before launch

- Phone and WhatsApp numbers still need institute confirmation.
- Facebook and TikTok URLs have been supplied; add any other official profile URLs as needed.
- Course fees and titles are transcribed from supplied material and need management review.
- Mission and vision use the wording supplied on the institute poster.
- The About-page overview is adapted from supplied material; review it with management if it needs further refinement.
- Confirm the January 2027 intake details; no deadlines, application steps, or entry requirements are invented.
- Accreditation wording, staff profiles, testimonials, and real campus imagery are intentionally omitted until approved source material is supplied.
- A backend for direct inquiry submissions, domain, and hosting provider are still required; inquiries can be sent manually to the displayed email address.
- Configure the hosting provider to return `404.html` with an HTTP 404 status for missing pages.
- Canonical URLs and absolute Open Graph image URLs need the confirmed domain before launch.

## Launch checklist summary

- [x] Official institute name and capitalization
- [ ] January 2027 intake date and application details
- [ ] Course titles, durations, and fee units
- [ ] Entry requirements and any course descriptions
- [ ] Accreditation wording and scope
- [x] Exact public address
- [ ] Active phone numbers and WhatsApp line
- [x] Official email address
- [x] Facebook and TikTok profile URLs
- [ ] Any additional social profiles, if applicable
- [ ] Real staff/facility images and permissions
- [ ] Inquiry form destination/backend
- [ ] Domain and hosting details

## Notes

The website is implemented, but public launch remains dependent on the confirmations above. It intentionally avoids fabricated claims, testimonials, staff biographies, or unverified academic claims.
