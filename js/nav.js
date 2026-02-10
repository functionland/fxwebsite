/* Navigation: hamburger toggle, dropdown behavior */
(function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  const dropdownToggles = document.querySelectorAll('.nav__item--has-dropdown > .nav__link');

  if (!hamburger || !nav) return;

  // Hamburger toggle
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  // Mobile dropdown toggle (click)
  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      if (window.innerWidth > 768) return;
      e.preventDefault();
      const dropdown = this.nextElementSibling;
      if (!dropdown) return;

      // Close other dropdowns
      document.querySelectorAll('.nav__dropdown.active').forEach(function (d) {
        if (d !== dropdown) d.classList.remove('active');
      });

      dropdown.classList.toggle('active');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close on escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Reset on resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
      document.querySelectorAll('.nav__dropdown.active').forEach(function (d) {
        d.classList.remove('active');
      });
    }
  });
})();
