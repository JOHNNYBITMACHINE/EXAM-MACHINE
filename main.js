document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.sections-container section');
  const navLinks = document.querySelectorAll('.main-nav a');

  function activateSectionById(id) {
    sections.forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
  }

  // On nav click, highlight section
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      // Remove '#' and get id
      const id = this.getAttribute('href').slice(1);
      setTimeout(() => activateSectionById(id), 100); // Wait for scroll
    });
  });

  // On scroll, highlight section in view
  window.addEventListener('scroll', function () {
    let found = false;
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (!found && rect.top < window.innerHeight / 2 && rect.bottom > 80) {
        sections.forEach(s => s.classList.remove('active'));
        sec.classList.add('active');
        found = true;
      }
    });
  });
});




// ...existing code...
function updateClock() {
    const clock = document.getElementById('digital-clock');
    if (!clock) return;
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();
// ...existing code...





// ...existing code...


