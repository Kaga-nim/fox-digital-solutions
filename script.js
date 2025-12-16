// Intersection Observer untuk animasi scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observ semua elemen yang perlu animasi
document.addEventListener('DOMContentLoaded', () => {
  // Animate elements on scroll
  document.querySelectorAll('.card, .why-card, .section-title').forEach(el => {
    observer.observe(el);
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.textContent = '☰';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.textContent = '☰';
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      const targetElement = document.querySelector(href);
      
      if (targetElement) {
        e.preventDefault();
        
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add current year to footer
  const yearSpan = document.querySelector('.current-year');
  if (!yearSpan) {
    const footer = document.querySelector('footer p');
    if (footer) {
      footer.innerHTML = footer.innerHTML.replace('2025', new Date().getFullYear());
    }
  }
});

// Form validation for contact page
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', function(e) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = '#ff4757';
      } else {
        field.style.borderColor = '';
      }
    });

    if (!isValid) {
      e.preventDefault();
      alert('Harap isi semua field yang wajib diisi.');
    }
  });
}

// Initialize form validation if on contact page
if (window.location.pathname.includes('kontak.html')) {
  validateForm('contactForm');
}
