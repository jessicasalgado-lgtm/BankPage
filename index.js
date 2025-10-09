// 🕓 Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// 📱 Navegación móvil (hamburguesa)
(() => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');

  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
