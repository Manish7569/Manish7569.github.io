/* =====================================================
   Manish Reddy Portfolio — script.js
   Senior GenAI / AI-ML Engineer
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 1. Fade-up scroll animations ── */
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.fade-up').forEach((el) => fadeObserver.observe(el));


  /* ── 2. Smooth scroll for all in-page anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  /* ── 3. Active nav link highlight on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: '-60px 0px -40% 0px',
    }
  );

  sections.forEach((section) => navObserver.observe(section));


  /* ── 4. Nav background darkens on scroll ── */
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(10, 10, 15, 0.97)';
    } else {
      nav.style.background = 'rgba(10, 10, 15, 0.85)';
    }
  });


  /* ── 5. Contact form send button feedback ── */
  const formBtn = document.querySelector('.form-btn');

  if (formBtn) {
    formBtn.addEventListener('click', () => {
      formBtn.textContent = 'Message Sent! ✓';
      formBtn.style.background = 'var(--accent2)';
      formBtn.disabled = true;

      // Reset after 4 seconds
      setTimeout(() => {
        formBtn.textContent = 'Send Message';
        formBtn.style.background = '';
        formBtn.disabled = false;
      }, 4000);
    });
  }

});
