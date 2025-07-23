const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', function(event) {
    sidebar.classList.toggle('open');
    event.stopPropagation(); // Prevent body click event
});

// Close sidebar when clicking outside (on body)
document.body.addEventListener('click', function(event) {
    // Only close if sidebar is open and click is outside sidebar/toggle
    if (
        sidebar.classList.contains('open') &&
        !sidebar.contains(event.target) &&
        event.target !== sidebarToggle
    ) {
        sidebar.classList.remove('open');
    }
});







