// ============================================================
//  INTERVIEW PREP STUDY GUIDE — MAIN JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Progress Bar ──────────────────────────────────────────
  const progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${(scrolled / total) * 100}%`;
  }, { passive: true });

  // ── Dark/Light Toggle ─────────────────────────────────────
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') { body.classList.add('light'); themeToggle.textContent = '🌙 Dark'; }
  else { themeToggle.textContent = '☀️ Light'; }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    const isLight = body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggle.textContent = isLight ? '🌙 Dark' : '☀️ Light';
  });

  // ── Mobile Menu Toggle ────────────────────────────────────
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  menuToggle && menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // ── Scrollspy ─────────────────────────────────────────────
  const sections = document.querySelectorAll('.topic-section[id]');
  const navLinks = document.querySelectorAll('#sidebar a[href^="#"]');

  const observerOptions = { rootMargin: '-20% 0px -70% 0px', threshold: 0 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`#sidebar a[href="#${entry.target.id}"]`);
        if (active) {
          active.classList.add('active');
          active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      }
    });
  }, observerOptions);

  sections.forEach(s => observer.observe(s));

  // ── Accordion Q&A ─────────────────────────────────────────
  document.querySelectorAll('.qa-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.qa-item');
      const isOpen = item.classList.contains('open');
      // Close all in same section
      btn.closest('.qa-section').querySelectorAll('.qa-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Copy Code ─────────────────────────────────────────────
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.closest('.code-block-wrapper').querySelector('code');
      navigator.clipboard.writeText(code.innerText).then(() => {
        btn.textContent = '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
      });
    });
  });

  // ── Search ────────────────────────────────────────────────
  const searchInput = document.getElementById('search-input');
  searchInput && searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      navLinks.forEach(a => a.closest('li').style.display = '');
      return;
    }
    navLinks.forEach(a => {
      const text = a.textContent.toLowerCase();
      a.closest('li').style.display = text.includes(query) ? '' : 'none';
    });
    // Jump to first matching section
    const match = [...sections].find(s => {
      return s.textContent.toLowerCase().includes(query);
    });
    if (match) {
      match.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // ── Mermaid Init ─────────────────────────────────────────
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: true,
      theme: document.body.classList.contains('light') ? 'default' : 'dark',
      themeVariables: {
        primaryColor: '#7c3aed',
        primaryTextColor: '#e2e8f0',
        primaryBorderColor: '#7c3aed',
        lineColor: '#94a3b8',
        secondaryColor: '#0f1629',
        tertiaryColor: '#1e293b',
        background: '#0a0f1e',
        nodeBorder: '#7c3aed',
        clusterBkg: '#0f1629',
        titleColor: '#e2e8f0',
        edgeLabelBackground: '#0f1629',
        attributeBackgroundColorEven: '#0f1629',
        attributeBackgroundColorOdd: '#1e293b',
      },
      securityLevel: 'loose',
      flowchart: { htmlLabels: true, curve: 'basis' },
    });
  }

  // Re-init mermaid on theme toggle for proper colours
  themeToggle.addEventListener('click', () => {
    if (!window.mermaid) return;
    const isLight = document.body.classList.contains('light');
    mermaid.initialize({
      startOnLoad: false,
      theme: isLight ? 'default' : 'dark',
      securityLevel: 'loose',
    });
    document.querySelectorAll('.mermaid').forEach(el => {
      const code = el.getAttribute('data-src') || el.textContent;
      el.removeAttribute('data-processed');
      el.textContent = code;
    });
    mermaid.run();
  });

  // Store mermaid source before processing
  document.querySelectorAll('.mermaid').forEach(el => {
    el.setAttribute('data-src', el.textContent.trim());
  });

  // ── Back to Top ───────────────────────────────────────────
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
