// Navigation Menu Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Close Menu on Link Click (Mobile) and Set Active Link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
    // Remove active-link from all links
    navLinks.forEach(l => l.classList.remove('active-link'));
    // Add active-link to clicked link
    link.classList.add('active-link');
  });
});

// Language Toggle
document.querySelectorAll('.lang-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    const lang = e.target.getAttribute('data-lang');
    document.body.setAttribute('data-lang', lang);
    localStorage.setItem('language', lang);
  });
});

// Set default language from localStorage or fallback to English
const savedLang = localStorage.getItem('language') || 'en';
document.body.setAttribute('data-lang', savedLang);

// ScrollReveal Animations
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 600,
  delay: 50,
  reset: false,
  mobile: true,
  easing: 'ease-in-out',
  viewFactor: 0.3
});

// Apply animations to sections
sr.reveal('.home, .home__data, .home__social, .home__img', { interval: 50 });
sr.reveal('.about, .about__container, .about__img, .about__text', {
  interval: 50
});
sr.reveal('.skills, .skills__content', { interval: 50 });
sr.reveal('.work, .work__img', { interval: 50 });
sr.reveal('.contact, .contact__container, .contact__input', { interval: 50 });
sr.reveal('.footer', { interval: 50 });

// Ensure elements are visible by default
document.querySelectorAll('.reveal').forEach(el => {
  el.style.opacity = '1';
  el.style.transform = 'none';
});

// Active Link on Scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').substring(1) === sectionId) {
          link.classList.add('active-link');
        }
      });
    }
  });
});

// Set initial active link on page load
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash || '#home';
  navLinks.forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('href') === hash) {
      link.classList.add('active-link');
    }
  });
});