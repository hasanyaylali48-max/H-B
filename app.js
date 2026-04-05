function speakWelcome() {
  const msg = new SpeechSynthesisUtterance("Hoşgeldiniz Hasan, H ve B uygulamasına giriş yapıyorsunuz.");
  msg.lang = "tr-TR";
  msg.pitch = 1.2;
  msg.rate = 1;
  window.speechSynthesis.speak(msg);
}

function goToPanels() {
  speakWelcome();
  document.getElementById("welcome").classList.add("hidden");
  const panels = document.getElementById("panels");
  panels.classList.remove("hidden");

  const panelItems = panels.querySelectorAll(".panel");
  panelItems.forEach((panel, i) => {
    panel.style.animationDelay = `${i * 0.3}s`;
  });
}

// Günün sözü
const quotes = [
  "Başarı, hazırlık ile fırsatın buluştuğu noktadır.",
  "Bugün yapabileceğini yarına bırakma.",
  "Hayallerini gerçekleştirmek için harekete geç.",
  "Zorluklar, seni daha güçlü yapar."
];
document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];

// Tarih ve saat
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString('tr-TR', options);
  const timeStr =
// Basit partikül animasyonu
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
for (let i = 0; i < 100; i++) {
  particlesArray.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
