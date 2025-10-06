// small interactive bits
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

function handleContact(e){
  e.preventDefault();
  const form = e.currentTarget;
  // naive success
  alert('Thanks! Message sent (not really) — this is a demo site.');
  form.reset();
}

// smooth scroll for nav
document.querySelectorAll('.nav-link').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href') || '';
    // only intercept in-page hash links (e.g. #about). Allow normal navigation for other links.
    if(href.startsWith('#')){
      e.preventDefault();
      document.querySelectorAll('.nav-link').forEach(x=>x.classList.remove('active'));
      a.classList.add('active');
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  })
})
