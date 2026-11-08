/* Academic homepage — small interactions:
   dark-mode toggle, mobile menu, footer year. */
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

  /* ---- Footer year ---- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
