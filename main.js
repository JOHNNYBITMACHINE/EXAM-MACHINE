
// and displays the current time in the format HH:MM:SS.
 
 function updateClock() {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            document.getElementById('digitalClock').textContent = `${h}:${m}:${s}`;
        }
        setInterval(updateClock, 1000);
        updateClock();


// This script toggles the visibility of the "About Us" section


document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("about-toggle");
    var content = document.getElementById("about-content");
    btn.addEventListener("click", function() {
        if (content.style.display === "none") {
            content.style.display = "block";
            btn.textContent = "Show Less";
        } else {
            content.style.display = "none";
            btn.textContent = "Show More";
        }
    });
});