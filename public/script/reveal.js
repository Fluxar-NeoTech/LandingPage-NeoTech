const els = document.querySelectorAll('.reveal');

const ioReveal = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
      const idx = Array.from(el.parentNode?.children || []).indexOf(el);
      const auto = 60 * (el.hasAttribute('data-no-auto') ? 0 : Math.max(0, idx));
      el.style.transitionDelay = `${delay + auto}ms`;
      el.classList.add('is-in');
      ioReveal.unobserve(el);
    }
  });
});

els.forEach(el => ioReveal.observe(el));
