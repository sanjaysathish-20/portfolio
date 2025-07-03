// === Element Groups for Scroll Reveal ===
const elementGroups = [
  document.querySelectorAll('.timeline-item'),
  document.querySelectorAll('.skill-box'),
  document.querySelectorAll('.project-item'),
  document.querySelectorAll('.contact'),
  document.querySelectorAll('.contact-info, .contact-details, .social-links'),
  document.querySelectorAll('.about-text, .about-img'),
  document.querySelectorAll('.section-title')
];

// === Scroll Reveal Using IntersectionObserver ===
function observeElements(elements, className = 'visible') {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      } else {
        entry.target.classList.remove(className);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

// === Typing Effect ===
const typingText = document.querySelector('.typing-text');
const phrases = [
  "I'm a software engineer",
  "I'm passionate about coding",
  "I'm interested in AI and ML"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingText) return;

  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, 50);
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex++);
    if (charIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
    } else {
      setTimeout(typeEffect, 100);
    }
  }
}

// === Update icon to 'X' when menu is open ===
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuBtn.classList.toggle('open'); // ⬅️ toggles the icon
    });

    navLinks.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.classList.remove('open');
      })
    );
  }
});


const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.title = 'Go to top';
scrollTopBtn.innerHTML = '&#9650;';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === Init Everything on Load ===
window.addEventListener('load', () => {
  elementGroups.forEach(group => observeElements(group));
  setTimeout(typeEffect, 1000);
});
