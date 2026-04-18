/* ═══════════════════════════════════════
   THE VAULT — vault.js
   Shared scripts for all pages
═══════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── PARTICLES ─── */
  function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function spawn() {
      particles = [];
      const n = Math.floor((W * H) / 16000);
      for (let i = 0; i < n; i++) {
        particles.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
          r: Math.random() * 1.4 + .3,
          a: Math.random() * .45 + .08,
          col: Math.random() > .72 ? '#ff00aa' : '#00fff5'
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.col;
        ctx.globalAlpha = p.a;
        ctx.fill();
      });
      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (d < 95) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#00fff5';
            ctx.globalAlpha = (1 - d / 95) * .07;
            ctx.lineWidth = .5;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }

    resize(); spawn(); draw();
    window.addEventListener('resize', () => { resize(); spawn(); });
  }

  /* ─── SCROLL REVEAL ─── */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 70);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: .1 });
    els.forEach(el => obs.observe(el));
  }

  /* ─── COUNTERS ─── */
  function initCounters() {
    const els = document.querySelectorAll('[data-count]');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = +el.dataset.count;
        const dur = 1400;
        let start = null;
        function step(ts) {
          if (!start) start = ts;
          const p = Math.min((ts - start) / dur, 1);
          el.textContent = String(Math.floor(p * target)).padStart(2, '0');
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        obs.unobserve(el);
      });
    }, { threshold: .5 });
    els.forEach(el => obs.observe(el));
  }

  /* ─── ACTIVE NAV ─── */
  function initActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href').split('/').pop() || 'index.html';
      if (href === path) a.classList.add('active');
    });
  }

  /* ─── MOBILE HAMBURGER ─── */
  function initHamburger() {
    const btn = document.querySelector('.nav-hamburger');
    const menu = document.querySelector('.nav-links');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => menu.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) menu.classList.remove('open');
    });
  }

  /* ─── TYPED TERMINAL ─── */
  function initTyped() {
    const el = document.getElementById('typed-cmd');
    if (!el) return;
    const txt = el.dataset.text || '';
    let i = 0;
    el.textContent = '';
    const iv = setInterval(() => {
      el.textContent += txt[i++];
      if (i >= txt.length) clearInterval(iv);
    }, 60);
  }

  /* ─── INIT ─── */
  document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initReveal();
    initCounters();
    initActiveNav();
    initHamburger();
    initTyped();
  });

})();
