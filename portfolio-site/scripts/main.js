// small interactive bits
document.getElementById('year').textContent = new Date().getFullYear();
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
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  })
})
