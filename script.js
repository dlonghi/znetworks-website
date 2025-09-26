// Simple typewriter animation for the H1
(function () {
const el = document.querySelector('.typewriter');
if (!el) return;
const text = el.getAttribute('data-text') || el.textContent;
el.textContent = '';
let i = 0;
function tick() {
el.textContent = text.slice(0, i++);
if (i <= text.length) {
requestAnimationFrame(() => setTimeout(tick, 40));
} else {
// blink cursor after typing
let visible = true;
setInterval(() => {
el.style.borderRightColor = visible ? 'transparent' : 'rgba(255,255,255,.6)';
visible = !visible;
}, 500);
}
}
tick();
})();


// Set current year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
