// Digital Clock
function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('digitalClock').textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

// Mobile detection function
function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function() {
    // About Us Show More/Less
    var btn = document.getElementById("about-toggle");
    var content = document.getElementById("about-content");
    if (btn && content) {
        btn.addEventListener("click", function() {
            if (content.classList.contains("about-collapsed")) {
                content.classList.remove("about-collapsed");
                content.classList.add("about-expanded");
                btn.textContent = "Show Less";
            } else {
                content.classList.remove("about-expanded");
                content.classList.add("about-collapsed");
                btn.textContent = "Show More";
            }
        });
    }

    // Add mobile-view class for mobile devices
    if (isMobile()) {
        document.body.classList.add("mobile-view");
        // You can also adjust specific containers if needed:
        // document.querySelector('.info-sections-container').classList.add('mobile-info');
    }
});