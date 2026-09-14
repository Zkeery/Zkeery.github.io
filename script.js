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

const articleSearch = document.getElementById('article-search');
const posts = [...document.querySelectorAll('.post-item')];
const resultStatus = document.getElementById('article-results');
articleSearch.addEventListener('input', () => {
  const query = articleSearch.value.trim().toLocaleLowerCase();
  let count = 0;
  for (const post of posts) {
    const matches = post.textContent.toLocaleLowerCase().includes(query);
    post.hidden = !matches;
    if (matches) count++;
  }
  resultStatus.hidden = !query;
  resultStatus.textContent = count ? `找到 ${count} 篇文章` : '没有找到相关文章，试试其他关键词。';
});
articleSearch.addEventListener('keydown', event => {
  if (event.key === 'Enter') { location.hash = 'writing'; document.getElementById('writing-title').scrollIntoView({block:'start'}); }
});
