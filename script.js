const navLinks = [...document.querySelectorAll('.nav-link')];
function updateNavigation() {
  const focusAnchors = ['#product-thinking', '#ai-products', '#product-delivery'];
  const hash = focusAnchors.includes(location.hash) ? '#focus' : (location.hash || '#home');
  for (const link of navLinks) {
    const selected = link.hash === hash;
    link.classList.toggle('active', selected);
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
window.addEventListener('hashchange', updateNavigation);
updateNavigation();
