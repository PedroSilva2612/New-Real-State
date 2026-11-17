// The discount code's copy button: the label swaps with a short blur, the status line says what happened.
for (const btn of document.querySelectorAll('[data-copy]')) {
  const label = btn.querySelector('.promo__copy-text');
  const status = btn.closest('[data-promo]')?.querySelector('.promo__status');
  const original = label.textContent;
  let timer;
  const swap = (text) => {
    btn.classList.add('is-swapping');
    setTimeout(() => { label.textContent = text; btn.classList.remove('is-swapping'); }, 120);
  };
  btn.addEventListener('click', async () => {
    clearTimeout(timer);
    let ok = true;
    try { await navigator.clipboard.writeText(btn.dataset.copy); } catch { ok = false; }
    swap(ok ? 'Código copiado' : 'Cópialo a mano');
    if (status) status.textContent = ok ? 'Código LLAVES50 copiado. Pégalo en el formulario de visita.' : 'No se pudo copiar automáticamente: selecciona LLAVES50 y cópialo.';
    timer = setTimeout(() => swap(original), 2000);
  });
}

// Links to a section of the page glide there. Only a click does: keyboard focus keeps the browser's
// instant scroll, and so does reduced motion. The address and the focus end where a normal jump would.
const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
document.addEventListener('click', (e) => {
  if (calm.matches || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = decodeURIComponent(link.getAttribute('href').slice(1));
  const target = id ? document.getElementById(id) : null;
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.pushState(null, '', '#' + id);
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
});
