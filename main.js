// ...existing code...

// Interactive Smoky Cursor Effect
document.addEventListener('mousemove', function (e) {
    const smoke = document.createElement('div');
    smoke.className = 'smoke-cursor';

    // Randomize color, size, and rotation
    const colors = [
        'rgba(236,40,141,0.25)',   // pink
        'rgba(44,23,231,0.18)',    // blue
        'rgba(122,212,185,0.18)',  // teal
        'rgba(255,255,255,0.18)',  // white
        'rgba(255,200,55,0.18)'    // yellow
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 18 + Math.random() * 24;
    const rotate = Math.random() * 360;

    smoke.style.left = (e.clientX - size / 2) + 'px';
    smoke.style.top = (e.clientY - size / 2) + 'px';
    smoke.style.width = size + 'px';
    smoke.style.height = size + 'px';
    smoke.style.background = `radial-gradient(circle, ${color} 0%, transparent 80%)`;
    smoke.style.transform = `scale(1) rotate(${rotate}deg)`;

    document.body.appendChild(smoke);

    setTimeout(() => {
        smoke.style.opacity = '0';
        smoke.style.transform = `scale(2.2) rotate(${rotate + 60}deg)`;
    }, 10);

    setTimeout(() => {
        smoke.remove();
    }, 900);
});


document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle');

    // Ensure sidebar is scrollable for all items
    sidebar.style.overflowY = 'auto';
    sidebar.style.maxHeight = '100vh';

    // Toggle sidebar on button click
    toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        } else {
            sidebar.classList.add('open');
        }
    });

    // Close sidebar if click outside or on any link
    document.addEventListener('click', function (e) {
        if (
            sidebar.classList.contains('open') &&
            !sidebar.contains(e.target) &&
            e.target !== toggleBtn
        ) {
            sidebar.classList.remove('open');
        }
    });

    // Close sidebar on link click (for mobile/UX)
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    });
});


// ...existing code...

// Replace with your Google OAuth Client ID


// ...existing code...


// ...existing code...
// ...existing code...

// Digital clock update
function updateDigitalClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const clock = document.getElementById('flip-clock');
    if (clock) {
        clock.textContent = `${h}:${m}:${s}`;
    }
}
setInterval(updateDigitalClock, 1000);
updateDigitalClock();


// Google Sign-In initialization

const CLIENT_ID = '214703497000-hhsl925vqj47elf2b84jl9end0hm8quk.apps.googleusercontent.com';

function handleCredentialResponse(response) {
    const data = parseJwt(response.credential);
    const userName = data.name || data.email;
    // Update navigation
    document.getElementById('login-nav').innerHTML = `
        <span style="display:flex;align-items:center;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" style="width:24px;height:24px;margin-right:6px;">
            ${userName}
        </span>
        <button id="signout-btn-nav" style="margin-left:10px;">Sign Out</button>
    `;
    // Update sidebar
    document.getElementById('sidebar-login').innerHTML = `
        <span style="display:flex;align-items:center;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" style="width:24px;height:24px;margin-right:6px;">
            ${userName}
        </span>
        <button id="signout-btn-sidebar" style="margin-left:10px;">Sign Out</button>
    `;
    document.getElementById('signout-btn-nav').onclick = signOut;
    document.getElementById('signout-btn-sidebar').onclick = signOut;
    localStorage.setItem('userName', userName);
}

function signOut() {
    google.accounts.id.disableAutoSelect();
    localStorage.removeItem('userName');
    location.reload();
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

window.onload = function () {
    const userName = localStorage.getItem('userName');
    if (userName) {
        // Already logged in
        document.getElementById('login-nav').innerHTML = `
            <span style="display:flex;align-items:center;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" style="width:24px;height:24px;margin-right:6px;">
                ${userName}
            </span>
            <button id="signout-btn-nav" style="margin-left:10px;">Sign Out</button>
        `;
        document.getElementById('sidebar-login').innerHTML = `
            <span style="display:flex;align-items:center;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" style="width:24px;height:24px;margin-right:6px;">
                ${userName}
            </span>
            <button id="signout-btn-sidebar" style="margin-left:10px;">Sign Out</button>
        `;
        document.getElementById('signout-btn-nav').onclick = signOut;
        document.getElementById('signout-btn-sidebar').onclick = signOut;
    } else {
        // Show Google Sign-In button
        google.accounts.id.initialize({
            client_id: CLIENT_ID,
            callback: handleCredentialResponse,
            auto_select: true
        });
        google.accounts.id.renderButton(
            document.getElementById("g_id_signin"),
            { theme: "outline", size: "large", logo_alignment: "left", text: "signin_with", shape: "rectangular" }
        );
        google.accounts.id.renderButton(
            document.getElementById("g_id_signin_sidebar"),
            { theme: "outline", size: "large", logo_alignment: "left", text: "signin_with", shape: "rectangular" }
        );
        google.accounts.id.prompt();
    }
};