import { useEffect } from 'react';

const ACC = {
  coral:   ['#ff5436', '#ffffff'],
  violet:  ['#6b4bf0', '#ffffff'],
  blue:    ['#2f6bff', '#ffffff'],
  lime:    ['#bfe817', '#14131a'],
  magenta: ['#ff3da6', '#ffffff'],
  amber:   ['#ffac1c', '#14131a'],
};

let curAccent = '';

export function useVertoBehaviors(pathname) {
  useEffect(() => {
    // Reset reveals on route change
    document.querySelectorAll('.reveal.in, .line-mask.in').forEach(el => {
      el.classList.remove('in');
      if (el.classList.contains('line-mask')) {
        el.querySelectorAll(':scope > span').forEach(s => {
          s.style.cssText = '';
        });
      }
    });
    curAccent = '';

    const h = () => window.innerHeight || document.documentElement.clientHeight;

    function forceShow(el) {
      const targets = el.classList.contains('line-mask')
        ? el.querySelectorAll(':scope > span') : [el];
      targets.forEach(t => {
        t.style.animation = 'none';
        t.style.transition = 'none';
        t.style.opacity = '1';
        t.style.transform = 'none';
      });
    }

    function scanReveals() {
      const vh = h();
      document.querySelectorAll('.reveal:not(.in), .line-mask:not(.in)').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) {
          el.classList.add('in');
          setTimeout(() => forceShow(el), 1500);
        }
      });
    }

    function scanAccent() {
      const vh = h(), mid = vh * 0.5;
      const els = document.querySelectorAll('[data-accent]');
      let best = null, bestDist = 1e9;
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) { best = el; return; }
        const d = Math.min(Math.abs(r.top - mid), Math.abs(r.bottom - mid));
        if (d < bestDist) { bestDist = d; best = el; }
      });
      if (!best) return;
      const key = best.getAttribute('data-accent');
      if (key === curAccent || !ACC[key]) return;
      curAccent = key;
      document.documentElement.style.setProperty('--accent', ACC[key][0]);
      document.documentElement.style.setProperty('--accent-ink', ACC[key][1]);
    }

    function scanCounters() {
      const vh = h();
      document.querySelectorAll('[data-count]:not([data-counted])').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.85 && r.bottom > 0) {
          el.dataset.counted = '1';
          const to = parseFloat(el.dataset.count);
          const dec = (el.dataset.count.split('.')[1] || '').length;
          const suffix = el.dataset.suffix || '';
          let t0 = null;
          const dur = 1500;
          const step = t => {
            if (!t0) t0 = t;
            const p = Math.min((t - t0) / dur, 1);
            const e = 1 - Math.pow(1 - p, 3);
            el.textContent = (to * e).toFixed(dec) + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }

    function scanNav() {
      const nav = document.querySelector('.nav');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);
    }

    function onScroll() {
      scanReveals();
      scanAccent();
      scanCounters();
      scanNav();
    }

    // Duplicate marquees (clone nodes, no innerHTML)
    const marqueeCleanups = [];
    document.querySelectorAll('.marquee-track:not([data-dup])').forEach(t => {
      const originalCount = t.children.length;
      t.dataset.dup = '1';
      Array.from(t.children).forEach(child => t.appendChild(child.cloneNode(true)));
      marqueeCleanups.push(() => {
        while (t.children.length > originalCount) t.removeChild(t.lastChild);
        delete t.dataset.dup;
      });
    });

    // Magnetic buttons (desktop only)
    const cleanupMagnetic = [];
    if (!window.matchMedia('(pointer: coarse)').matches) {
      document.querySelectorAll('[data-magnetic]').forEach(el => {
        const s = 0.3;
        const onMove = e => {
          const r = el.getBoundingClientRect();
          el.style.transform = `translate(${(e.clientX - r.left - r.width/2) * s}px,${(e.clientY - r.top - r.height/2) * s}px)`;
        };
        const onLeave = () => { el.style.transform = ''; };
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
        cleanupMagnetic.push(() => {
          el.removeEventListener('mousemove', onMove);
          el.removeEventListener('mouseleave', onLeave);
        });
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    onScroll();
    requestAnimationFrame(onScroll);
    setTimeout(onScroll, 120);
    setTimeout(onScroll, 600);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cleanupMagnetic.forEach(fn => fn());
      marqueeCleanups.forEach(fn => fn());
    };
  }, [pathname]);
}
