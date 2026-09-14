document.getElementById('year').textContent = new Date().getFullYear();
const navLinks = [...document.querySelectorAll('.nav-link')];
function updateNavigation() {
  const hash = location.hash === '#pomodoro' ? '#work' : (location.hash || '#home');
  for (const link of navLinks) {
    const selected = link.hash === hash;
    link.classList.toggle('active', selected);
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
window.addEventListener('hashchange', updateNavigation);
updateNavigation();
