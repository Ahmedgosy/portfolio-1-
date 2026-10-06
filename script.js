// ============================================================
// Mobile nav toggle
// ============================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// close the mobile menu after tapping a link
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================================
// Reveal-on-scroll for elements marked ".reveal"
// ============================================================
const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

// ============================================================
// Terminal — line-by-line reveal on load
// ============================================================
const termLines = document.querySelectorAll('.terminal-body .tline');
termLines.forEach((line, i) => {
  line.style.opacity = '0';
  line.style.transform = 'translateY(4px)';
  line.style.transition = 'opacity .35s ease, transform .35s ease';
  setTimeout(() => {
    line.style.opacity = '1';
    line.style.transform = 'none';
  }, 350 + i * 260);
});

// ============================================================
// Active nav link highlighting
// ============================================================
const sections = document.querySelectorAll('section[id]');
const navAnchors = navLinks.querySelectorAll('a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => {
          a.classList.toggle(
            'is-active',
            a.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => sectionObserver.observe(s));

// ============================================================
// Scroll progress bar
// ============================================================
const progressBar = document.getElementById('scrollProgress');

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
