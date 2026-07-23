/* ============================================================
   AqGoEs — script.js
   Menu hambúrguer, navegação ativa por scroll e progresso de leitura
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menu hambúrguer (mobile) ---------- */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Fecha o menu ao clicar em um link (útil em telas pequenas)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Realce do link ativo ao rolar a página (index.html) ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navAnchors.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }

  /* ---------- Barra de progresso de leitura (single.html) ---------- */
  const progressBar = document.querySelector('.reading-progress');
  if (progressBar) {
    const updateProgress = () => {
      const article = document.querySelector('.article-content');
      if (!article) return;
      const total = article.scrollHeight - window.innerHeight;
      const current = window.scrollY - article.offsetTop + window.innerHeight * 0.4;
      const pct = Math.min(100, Math.max(0, (current / total) * 100));
      progressBar.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ---------- Paginação visual (blog.html) — apenas troca o item ativo ---------- */
  const pageButtons = document.querySelectorAll('.page-btn[data-page]');
  pageButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      pageButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      document.querySelector('.blog-banner')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

});
