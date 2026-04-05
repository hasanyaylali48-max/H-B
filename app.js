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
