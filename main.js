// ...existing code...

// Interactive Smoky Cursor Effect
document.addEventListener('mousemove', function(e) {
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

    smoke.style.left = (e.clientX - size/2) + 'px';
    smoke.style.top = (e.clientY - size/2) + 'px';
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