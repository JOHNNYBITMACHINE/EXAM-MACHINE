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

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('sidebar-toggle');
    const closeBtn = document.getElementById('close-sidebar');
    const body = document.body;

    function openSidebar() {
        sidebar.classList.remove('closed');
        body.classList.add('with-sidebar');
        body.classList.remove('no-sidebar');
        openBtn.style.display = 'none';
    }
    function closeSidebar() {
        sidebar.classList.add('closed');
        body.classList.remove('with-sidebar');
        body.classList.add('no-sidebar');
        openBtn.style.display = 'block';
    }

    openBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);

    // Sidebar is closed by default, so no need to open it on load
    closeSidebar();
});