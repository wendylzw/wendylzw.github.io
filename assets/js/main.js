/* Academic homepage — small interactions:
   dark-mode toggle, mobile menu, scroll reveal of headings, photo lightbox, footer year. */
(function () {
  var root = document.documentElement;

  function savedTheme() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }

  /* ---- Dark mode toggle ---- */
  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* Follow system changes while the visitor has not picked a theme themselves */
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var follow = function (e) {
      var t = savedTheme();
      if (t !== 'light' && t !== 'dark') root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    };
    if (mq.addEventListener) mq.addEventListener('change', follow);
    else if (mq.addListener) mq.addListener(follow);
  }

  /* ---- Mobile menu ---- */
  var menuBtn = document.querySelector('.nav__toggle');
  var links = document.getElementById('nav-links');
  if (menuBtn && links) {
    var setOpen = function (open) {
      links.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    menuBtn.addEventListener('click', function () {
      setOpen(!links.classList.contains('is-open'));
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  /* ---- Headings fade and slide in as they scroll into view ---- */
  var headings = document.querySelectorAll('.content h1, .content h2, .content h3');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    headings.forEach(function (h) { h.classList.add('reveal'); io.observe(h); });
  }

  /* ---- Click the photo to see it large ---- */
  var photoBtn = document.querySelector('.profile__photo');
  var lightbox = document.getElementById('photo-lightbox');
  if (photoBtn && lightbox && typeof lightbox.showModal === 'function') {
    var big = lightbox.querySelector('img');
    photoBtn.addEventListener('click', function () {
      var img = photoBtn.querySelector('img');
      big.src = img.currentSrc || img.src;
      lightbox.showModal();
    });
    // Close on any click (photo, backdrop or the × button)
    lightbox.addEventListener('click', function () { lightbox.close(); });
  }

  /* ---- Footer year ---- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
