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
