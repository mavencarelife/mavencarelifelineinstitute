const siteConfig = {
  instituteName: 'Maven Care Lifeline Training Institute',
  email: 'mavencarelife@gmail.com',
  tagline: 'Empowering Skills. Inspiring Compassion. Transforming Lives.',
  intakeLabel: 'January 2027',
  whatsappNumber: '',
  phoneNumbers: [],
  address: 'Along Busia-Kisumu Road, Tanaka Junction, Opposite Pramukh, Busia County, Kenya',
  socialLinks: {
    facebook: 'https://www.facebook.com/profile.php?id=61596615629328',
    instagram: '',
    tiktok: 'https://www.tiktok.com/@mavencarelifeline?is_from_webapp=1&sender_device=pc'
  },
  courses: [
    { name: 'Diploma in Counselling Psychology', duration: '5 Terms', fee: 'KSh 20,000 per Term' },
    { name: 'Certificate in Counselling Psychology', duration: '3 Terms', fee: 'KSh 20,000 per Term' },
    { name: 'Certificate in Forensic Psychology', duration: '3 Terms', fee: 'KSh 20,000 per Term' },
    { name: 'Certificate in Mediation', duration: '40 Hours', fee: 'KSh 25,000' },
    { name: 'Certificate in Gender & Human Rights', duration: '3 Months', fee: 'KSh 10,000' },
    { name: 'Certificate in Health Support Service', duration: '6 Months', fee: 'KSh 60,000' },
    { name: 'Caregiver Level 4', duration: '6 Months', fee: 'KSh 50,000' },
    { name: 'Certified Nurse Assistant (CNA)', duration: '6 Months', fee: 'KSh 50,000' },
    { name: 'Certificate in Housekeeping', duration: '2 Months', fee: 'KSh 10,000' },
    { name: 'Certificate in ICT', duration: '3 Months', fee: 'KSh 15,000' },
    { name: 'Certified TOT', duration: '2 Months', fee: 'KSh 25,000' }
  ]
};

const socialIconPaths = {
  facebook: 'assets/icons/facebook%20icon.svg',
  tiktok: 'assets/icons/tik-tok.svg'
};

const currentYear = new Date().getFullYear();
const yearSpans = document.querySelectorAll('[data-year]');
for (const el of yearSpans) {
  el.textContent = currentYear;
}

const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(nav.classList.contains('open')));
    navToggle.setAttribute('aria-label', nav.classList.contains('open') ? 'Close menu' : 'Open menu');
  });
}

const navLinks = document.querySelectorAll('[data-nav] a');
for (const link of navLinks) {
  const href = link.getAttribute('href');
  if (href && window.location.pathname.endsWith(href)) {
    link.classList.add('active');
  }
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (nav && navToggle) {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav && navToggle) {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  }
});

function getCourseList() {
  return siteConfig.courses;
}

function renderFeaturedCourses(selector = '#featured-courses') {
  const target = document.querySelector(selector);
  if (!target) return;

  const courses = getCourseList().slice(0, 4);
  target.innerHTML = courses.map((course) => `
    <article class="card course-card" data-course-card data-course-name="${course.name}">
      <span class="tag">Featured</span>
      <h3>${course.name}</h3>
      <div class="meta">
        <span class="meta-item">⏱ ${course.duration}</span>
      </div>
      <a class="btn btn-primary inquire-link" href="contact.html?course=${encodeURIComponent(course.name)}">Inquire about this course</a>
    </article>
  `).join('');
  target.setAttribute('aria-busy', 'false');
}

function renderTableCatalog(selector = '#course-table') {
  const target = document.querySelector(selector);
  if (!target) return;

  const rows = getCourseList().map((course) => `
    <tr data-course-row data-course-name="${course.name}">
      <td>${course.name}</td>
      <td>${course.duration}</td>
      <td>${course.fee}</td>
      <td><a class="btn btn-primary inquire-link" href="contact.html?course=${encodeURIComponent(course.name)}">Inquire</a></td>
    </tr>
  `).join('');

  target.innerHTML = rows;
  target.setAttribute('aria-busy', 'false');
}

function setInquiryCourseFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const selectedCourse = params.get('course');
  const formMessage = selectedCourse
    ? 'Please share the details and entry requirements for this course.'
    : `Please share details about the courses and ${siteConfig.intakeLabel} intake.`;
  const whatsappMessage = selectedCourse
    ? `Hello ${siteConfig.instituteName}. I would like to inquire about ${selectedCourse} and the ${siteConfig.intakeLabel} intake.`
    : `Hello ${siteConfig.instituteName}. I would like to inquire about courses and the ${siteConfig.intakeLabel} intake.`;

  const messageInputs = document.querySelectorAll('[data-whatsapp-message]');
  const inquiryFields = document.querySelectorAll('[data-course-field]');
  const whatsappLinks = document.querySelectorAll('[data-whatsapp-link]');

  for (const input of messageInputs) {
    input.value = formMessage;
  }

  for (const field of inquiryFields) {
    if (selectedCourse) {
      field.value = selectedCourse;
    }
  }

  for (const link of whatsappLinks) {
    link.dataset.whatsappMessage = whatsappMessage;
  }
}

function configureWhatsAppLinks() {
  const elements = document.querySelectorAll('[data-whatsapp-link]');
  for (const el of elements) {
    if (!/^\d{10,15}$/.test(siteConfig.whatsappNumber)) {
      el.href = 'contact.html#inquiry-form';
      el.setAttribute('aria-label', 'Contact admissions; WhatsApp details have not been confirmed');
      continue;
    }

    const text = (el.dataset.whatsappMessage || `Hello Maven Care Lifeline Training Institute. I would like to inquire about the ${siteConfig.intakeLabel} intake.`).trim();
    const encoded = encodeURIComponent(text);
    el.href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
    if (el.dataset.whatsappLabel) el.textContent = el.dataset.whatsappLabel;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  }
}

function populateConfigurableContent() {
  for (const element of document.querySelectorAll('[data-site-tagline]')) {
    element.textContent = siteConfig.tagline;
  }

  for (const element of document.querySelectorAll('[data-intake-label]')) {
    element.textContent = `${siteConfig.intakeLabel} intake`;
  }

  for (const element of document.querySelectorAll('[data-intake-year]')) {
    element.textContent = siteConfig.intakeLabel;
  }

  for (const meta of document.querySelectorAll('meta[name="description"], meta[property="og:description"]')) {
    meta.content = meta.content.replace(/January 2027 intake/g, `${siteConfig.intakeLabel} intake`);
  }

  for (const element of document.querySelectorAll('[data-location-address]')) {
    element.textContent = siteConfig.address;
  }

  for (const element of document.querySelectorAll('[data-contact-phones]')) {
    if (siteConfig.phoneNumbers.length === 0) {
      element.textContent = 'Phone contact numbers are awaiting confirmation.';
      continue;
    }

    element.replaceChildren();
    siteConfig.phoneNumbers.forEach((phone, index) => {
      if (index > 0) element.append(document.createElement('br'));
      const link = document.createElement('a');
      link.href = `tel:${phone.replace(/\D/g, '')}`;
      link.textContent = phone;
      element.append(link);
    });
  }

  for (const element of document.querySelectorAll('[data-contact-email]')) {
    if (!siteConfig.email) {
      element.textContent = 'Email address awaiting confirmation.';
      continue;
    }

    const link = document.createElement('a');
    link.href = `mailto:${siteConfig.email}`;
    link.className = 'contact-email-link';
    const icon = document.createElement('img');
    icon.src = 'assets/icons/gmail%20icon.svg';
    icon.alt = '';
    icon.setAttribute('aria-hidden', 'true');
    icon.className = 'contact-icon';
    link.append(icon, document.createTextNode(siteConfig.email));
    element.replaceChildren(link);
  }

  for (const element of document.querySelectorAll('[data-whatsapp-status]')) {
    element.textContent = /^\d{10,15}$/.test(siteConfig.whatsappNumber)
      ? 'The confirmed WhatsApp line is enabled through the Inquire buttons.'
      : 'The WhatsApp number is awaiting confirmation by the institute.';
  }

  for (const container of document.querySelectorAll('[data-social-links]')) {
    const emptyMessage = container.querySelector('[data-social-empty]');
    const activeLinks = Object.entries(siteConfig.socialLinks).filter(([, url]) => url);
    if (emptyMessage) emptyMessage.hidden = activeLinks.length > 0;

    for (const [platform, url] of activeLinks) {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      const label = platform === 'tiktok'
        ? 'TikTok'
        : platform.charAt(0).toUpperCase() + platform.slice(1);
      link.setAttribute('aria-label', label);
      link.title = label;
      const iconPath = socialIconPaths[platform];
      if (iconPath) {
        const icon = document.createElement('img');
        icon.src = iconPath;
        icon.alt = '';
        icon.setAttribute('aria-hidden', 'true');
        link.append(icon);
      } else {
        link.textContent = label;
      }
      container.append(link);
    }
  }
}

function bindFormHandlers() {
  const form = document.querySelector('[data-inquiry-form]');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const course = form.querySelector('[name="course"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    const status = form.querySelector('[data-form-status]');
    const preview = form.querySelector('[data-message-preview]');

    if (!name || !email || !course || !message) {
      status.textContent = 'Please complete all required fields before preparing your inquiry.';
      status.className = 'status-message visible error';
      return;
    }

    const inquiry = [
      `Hello ${siteConfig.instituteName}.`,
      `My name is ${name}.`,
      `Email: ${email}`,
      `I would like to inquire about ${course} and the ${siteConfig.intakeLabel} intake.`,
      message
    ].join('\n');

    preview.value = inquiry;
    form.querySelector('[data-message-preview-wrap]').hidden = false;

    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        throw new Error('Clipboard access is unavailable in this browser.');
      }
      await navigator.clipboard.writeText(inquiry);
      status.textContent = 'Inquiry text copied. It has not been sent; email it to the address shown on this page.';
      status.className = 'status-message visible success';
    } catch (error) {
      status.textContent = `${error.message} Your prepared inquiry is shown below so you can select and copy it manually. Nothing has been sent.`;
      status.className = 'status-message visible error';
    }
  });
}

function bindCourseFilter() {
  const filter = document.querySelector('[data-course-filter]');
  if (!filter) return;

  const rows = document.querySelectorAll('[data-course-row]');
  const noResults = document.querySelector('[data-course-no-results]');

  filter.addEventListener('input', () => {
    const query = filter.value.trim().toLowerCase();
    let visibleCount = 0;
    for (const row of rows) {
      const name = row.dataset.courseName.toLowerCase();
      const visible = !query || name.includes(query);
      row.style.display = visible ? '' : 'none';
      if (visible) visibleCount += 1;
    }
    if (noResults) noResults.hidden = visibleCount > 0;
  });
}

renderFeaturedCourses();
renderTableCatalog();
setInquiryCourseFromQuery();
configureWhatsAppLinks();
populateConfigurableContent();
bindFormHandlers();
bindCourseFilter();
