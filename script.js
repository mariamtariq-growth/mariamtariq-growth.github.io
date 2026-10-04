const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');
const revealItems = document.querySelectorAll('.reveal');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggleButton && navLinks) {
  toggleButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));
