# Maven Care Lifeline Training Institute — Website Build Brief
**Document type:** Website requirements / implementation specification  
**Prepared for:** AI coding assistant / website developer  
**Intake focus:** January 2027  
**Primary location:** Busia County, Kenya  
**Status:** Historical requirements brief. Some details have since been confirmed or changed; see [the project README](../README.md) for the current structure and launch status.

---

## 1. Project goal

Create a polished, responsive, accessible, mobile-first website for **Maven Care Lifeline Training Institute**. The site should introduce a new training institution, explain its courses and fees, build foundational trust without fabricated testimonials, and make it easy for prospective learners to inquire about the January 2027 intake.

The website should feel **professional, welcoming, human, aspirational, and credible**—not overly corporate and not crowded with promotional graphics.

### Primary conversion goal
Generate course and admissions inquiries through WhatsApp and an inquiry form.

### Secondary goals
- Explain the institution and its training philosophy.
- Present course names, durations, and fees clearly.
- Communicate location and contact details.
- Build awareness of the January 2027 intake.
- Provide a foundation for future updates, real staff profiles, facility photos, and student stories.

---

## 2. Brand direction

### Institution name
**Maven Care Lifeline Training Institute**

### Visual identity
Use the supplied institute logo and posters as visual references. Preserve the existing recognizable **blue-and-white** identity.

Suggested design palette (sample values; use logo colors where possible):
- Deep navy: `#063B82`
- Institutional blue: `#0868B5`
- Bright accent blue: `#16A5E8`
- White: `#FFFFFF`
- Pale blue background: `#F1F8FF`
- Warm accent for important CTA only: `#FFC928`
- Main text: `#102B4E`

Use clean sans-serif typography, strong hierarchy, generous whitespace, rounded but restrained cards, subtle blue curves/gradients, and high-quality imagery. Ensure readability on small screens.

### Tagline
**Current site tagline:** “Empowering Skills. Inspiring Compassion. Transforming Lives.”

### Tone of voice
Clear, warm, encouraging, professional, student-focused, and plain-language. Avoid exaggerated claims, guarantees of employment, or claims of student success that cannot be substantiated.

---

## 3. Source-grounded institutional information

Use the following information from the supplied posters and organogram. Mark uncertain items for institute review rather than silently resolving them.

### About the institute — draft copy
“Maven Care Lifeline Training Institute is a training institution committed to providing quality medical, healthcare, and business education. We aim to equip learners with practical skills, professional competence, compassion, and ethical values for a brighter future.”

This is adapted from the supplied poster. Management should approve the final copy.

### Our Mission — poster copy
“To provide quality, practical and professional healthcare education that equips learners with the knowledge, skills, compassion and ethical values necessary to deliver safe, dignified and patient-centred care while improving the health and wellbeing of individuals, families and communities.”

### Our Vision — poster copy
“To become a leading centre of excellence in healthcare education and professional development, producing competent, compassionate and ethical caregivers who transform lives and contribute to quality healthcare locally and globally.”

### Values stated in supplied material
- Compassion
- Professionalism
- Integrity
- Excellence
- Dignity and Respect
- Service
- Teamwork

### Benefits highlighted in supplied materials
- Qualified / experienced instructors
- Practical learning and hands-on training
- Skills for employment / career-focused programs
- Supportive learning environment

These are institution-provided claims. Publish them only after management confirms that they are accurate.

### Organogram structure
The supplied organogram includes:
- Proprietor
- Board of Management
- Principal
- Deputy Principal — Administration & Finance
- Deputy Principal — Academics
- Dean of Students — Student Affairs & Welfare
- Registrar / Admissions & Records
- Heads of Department and Trainers
- Examinations Officer
- Industrial Liaison — Attachments
- Library & Learning Resources
- ICT Officer
- Guidance & Counselling
- Matron / Hostels & Welfare
- Institutional committees (Examinations, Quality Assurance, OSH)
- Students

Do not publish staff names or individual portraits unless the institute supplies and approves them. The organogram may be summarized on the About page; it does not need to be reproduced in full on the public website.

---

## 4. Courses, durations, and fees

Build a course listing page and reusable course cards. Display fee unit clearly as **Kenyan Shillings (KSh)**. Data below is transcribed from the supplied course-fee poster and must be verified by management before launch.

| Course | Duration | Fee |
|---|---:|---:|
| Diploma in Counselling Psychology | 5 Terms | KSh 20,000 per Term |
| Certificate in Counselling Psychology | 3 Terms | KSh 20,000 per Term |
| Certificate in Forensic Psychology | 3 Terms | KSh 20,000 per Term |
| Certificate in Mediation | 40 Hours | KSh 25,000 |
| Certificate in Gender & Human Rights | 3 Months | KSh 10,000 |
| Certificate in Health Support Service | 6 Months | KSh 60,000 |
| Caregiver Level 4 | 6 Months | KSh 50,000 |
| Certified Nurse Assistant (CNA) | 6 Months | KSh 50,000 |
| Certificate in Housekeeping | 2 Months | KSh 10,000 |
| Certificate in ICT | 3 Months | KSh 15,000 |
| Certified TOT | 2 Months | KSh 25,000 |

### Course page requirements
- Present courses in a searchable/filterable or clearly grouped responsive grid/list.
- Include course title, duration, fees, and “Inquire about this course” CTA.
- Each course CTA should prefill the inquiry message with the course name.
- Do not invent entry requirements, curricula, certification bodies, career outcomes, or course descriptions. Use a short generic prompt such as “Contact us for course details and entry requirements” until approved information is provided.
- Do not calculate total program cost from term fees unless confirmed.

---

## 5. Website sitemap and page requirements

### A. Home (`/`)
1. **Header/navigation**
   - Institute logo
   - Home
   - About
   - Courses
   - Admissions
   - Contact
   - Visible “Inquire Now” CTA
   - Mobile hamburger menu with accessible controls

2. **Hero section**
   - Heading: “Your Future in Care Begins Here” (campaign headline; editable)
   - Short subheading: introduce skills-focused, compassionate professional training.
   - Primary CTA: “Explore Courses”
   - Secondary CTA: “Inquire on WhatsApp”
   - Use an aspirational healthcare/learning image that is clearly illustrative unless supplied as a real institute photo.
   - Include January 2027 intake callout only while relevant.

3. **Course highlights**
   - Feature a few courses (e.g., Counselling Psychology, Caregiver Level 4, CNA, Health Support Service, ICT) and link to all courses.
   - Keep all 11 courses accessible in the full catalog.

4. **Why Maven Care**
   - Practical learning
   - Professional competence
   - Compassion and ethical values
   - Supportive learning environment
   - Qualified instructors (VERIFY)

5. **About / mission / vision preview**

6. **Admissions callout**
   - January 2027 intake
   - CTA to admissions/inquiry

7. **Contact strip**
   - Busia location (use approved location wording)
   - Phone contacts
   - WhatsApp CTA

8. **Footer**
   - Institute name and logo
   - Quick links
   - Courses link
   - Contact details
   - Location
   - Social links (use the supplied Facebook and TikTok URLs; use placeholders for any unprovided profiles)
   - Copyright year generated dynamically if supported

### B. About (`/about`)
- About institution draft copy
- Mission, vision, values
- “Our approach to learning” section
- Institutional structure summarized carefully
- Avoid fictional staff biographies, testimonials, or claims of a long track record.
- Optional “A new institution, built around your future” section; use only if management approves the framing.

### C. Courses (`/courses`)
- Full course list with durations and fees from the table above.
- Responsive course cards or table.
- Search/filter may be included if simple and usable.
- CTA per course opens WhatsApp or inquiry form with selected course.

### D. Admissions (`/admissions`)
- January 2027 intake announcement (editable and easy to update)
- “How to inquire/apply” steps, phrased as:
  1. Choose a course.
  2. Contact the institute for entry requirements and application guidance.
  3. Confirm current fees and intake details with admissions.
- Do not invent application forms, deadlines, entry requirements, payment instructions, or required documents.
- CTA: “Ask Admissions on WhatsApp” and inquiry form.

### E. Contact (`/contact`)
- Contact phone numbers
- Location/address
- WhatsApp contact CTA
- Inquiry form
- Map embed placeholder; embed only after exact map pin/location is verified.
- Include accessible labels, validation, and a clear success/error message.
- If no backend is configured, label the form as a prototype and ensure the developer connects it before launch. Do not make it appear that messages are submitted if they are not.

### F. FAQ section/page (`/faq` or on Admissions)
Create an editable FAQ component. Initially include only safe questions:
- What courses are offered?
- How do I get course fees and duration?
- How can I inquire about entry requirements?
- Where is the institute located?
- How do I contact admissions?
For answers, rely on verified information and direct unknowns to admissions.

---

## 6. Contact and location details — VERIFY before launch

The supplied materials contain slightly different address wording and phone lists.

### Address variants in supplied files
- Poster: “Along Busia-Kisumu road. Tanaka junction. Opposite pramukh.”
- Organogram: “Airport, Opposite Pramukh, Busia County.”
- Another poster area: “Tanaka junction opposite pramukh.”

**Action:** Ask institute management to confirm one exact public-facing address. Do not display competing versions on the site.

### Phone numbers shown
- `0714 000 612` (shown on one poster)
- `0729 312 475`
- `0720 640 141`
- Organogram lists `0729 312 475 / +254 720 640 141`

**Action:** Verify which numbers are active, which is the main admissions line, and which number is WhatsApp-enabled. Use only confirmed contacts. Format Kenya numbers consistently.

---

## 7. Trust-building approach for a brand-new institution

The institution is newly opening and does not yet have genuine student testimonials. Therefore:

- Do **not** create fake testimonials, reviews, alumni stories, student quotes, success statistics, or “our graduates” content.
- Do **not** depict stock-photo people as actual Maven Care students or staff.
- Stock/AI images may be used as **illustrative imagery**, with honest presentation and no false implication of real campus activity.
- Prefer real, approved photos of the institute’s leadership, trainers, classrooms, facilities, equipment, and preparation work when available.
- Humanize the site with warm copy, clear contact information, a transparent course/fee table, and a visible inquiry pathway.
- If accreditation is mentioned, management must confirm exact approved wording and the scope/status of accreditation before launch. Do not infer that every course has the same accreditation status from a promotional badge.

---

## 8. Functional, technical, and accessibility requirements

- Mobile-first responsive layout; test phone, tablet, desktop, and wide desktop.
- Semantic HTML and accessible headings.
- Keyboard-accessible navigation, forms, buttons, and menus.
- Meaningful alt text for informative images; empty alt for decorative images.
- Good color contrast and visible focus states.
- Optimize images (responsive sizes, modern formats where practical, lazy-load below-fold media).
- Fast loading and minimal unnecessary animation.
- SEO metadata per page: title, description, canonical URL placeholder, Open Graph title/description/image.
- Add LocalBusiness/EducationalOrganization structured data only with confirmed details; do not invent missing values.
- Add favicon using supplied logo if possible.
- Use reusable components for header, footer, CTA, course card, FAQ, and contact form.
- Keep course data, contacts, address, intake date, social links, tagline, and accreditation text in a central configuration/content file so management can update them easily.
- Do not hardcode false or unverified data.
- Avoid putting secrets or API keys in frontend code.
- Include a README with run/build/deployment instructions and identify any integrations requiring credentials or backend setup.

### Suggested implementation
Use the AI coding assistant’s existing project stack if one is already configured. If starting from an empty project, choose a modern, maintainable, responsive frontend stack and explain the choice. Do not introduce a complex CMS or backend unless necessary for the inquiry form/content updates.

---

## 9. Social and inquiry integration

Create configurable link placeholders for:
- Facebook page
- TikTok profile
- Instagram profile (if created)
- WhatsApp
- Email: `mavencarelife@gmail.com`

WhatsApp CTA should open a conversation to the **confirmed WhatsApp number** with a prefilled message, for example:
“Hello Maven Care Lifeline Training Institute. I would like to inquire about [Course Name] and the January 2027 intake.”

Until the WhatsApp-enabled number is confirmed, keep the number as a clearly marked configuration placeholder rather than generating a live link.

---

## 10. Content and assets to use

The project owner will provide the following source assets to the coding assistant:
- Institute logo / promotional posters
- Course and fee poster
- About / mission / vision / values poster
- Organizational chart PDF
- Social media cover/profile design references, if desired

Use supplied logo assets rather than redrawing the logo. Crop/resize assets as needed while preserving quality. Do not use the full poster as a substitute for a well-designed website page.

If the logo cannot be extracted cleanly, create a placeholder and document where the real logo should be placed.

---

## 11. Launch checklist

Before publishing, management/project owner must confirm:
- [ ] Official institute name and capitalization
- [ ] Final approved tagline
- [ ] January 2027 intake date and application/reporting details
- [ ] Course titles, durations, and fee units/amounts
- [ ] Entry requirements and any course descriptions to be added
- [ ] Accreditation wording and which courses it applies to
- [ ] Exact public address
- [ ] Active phone numbers and WhatsApp line
- [x] Official email address
- [x] Facebook and TikTok profile URLs
- [ ] Any additional social profiles, if applicable
- [ ] Real staff/facility images and permissions
- [ ] Inquiry form destination/backend
- [ ] Domain name and hosting/deployment details

---

## 12. Deliverables expected from the AI coding assistant

1. A complete responsive website implementing the sitemap above.
2. Reusable components and centralized editable content.
3. Course catalog populated with the source-provided course names, durations, and fees.
4. Inquiry form UI with working submission only if backend/integration is configured; otherwise clearly documented as pending.
5. WhatsApp CTA with confirmed-number configuration.
6. SEO basics and accessibility considerations.
7. README with setup, development, build, and deployment instructions.
8. A short list of all unresolved `VERIFY` items and where they appear in the site.
9. No fabricated testimonials, staff names, campus photos, accreditation details, entry requirements, or outcomes.

**Implementation instruction:** Build the website in a polished, complete first pass. Use clearly marked editable placeholders for missing or unverified details. Do not pause for minor questions; document unresolved confirmations in the README and launch checklist.
