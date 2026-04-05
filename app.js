function speakWelcome() {
  const msg = new SpeechSynthesisUtterance("Hoşgeldiniz, H ve B uygulamasına giriş yapıyorsunuz.");
  msg.lang = "tr-TR";
  msg.pitch = 1.2;
  msg.rate = 1;
  window.speechSynthesis.speak(msg);
}

function goToPanels() {
  // Sesli asistanı butona basınca çalıştır
  speakWelcome();

  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("panels").classList.remove("hidden");
}

function speakWelcome() {
  const msg = new SpeechSynthesisUtterance("Hoşgeldiniz, H ve B uygulamasına giriş yapıyorsunuz.");
  msg.lang = "tr-TR";
  msg.pitch = 1.2;
  msg.rate = 1;
  window.speechSynthesis.speak(msg);
}

function goToPanels() {
  speakWelcome();
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("panels").classList.remove("hidden");
}

// Günün sözü listesi
const quotes = [
  "Başarı, hazırlık ile fırsatın buluştuğu noktadır.",
  "Bugün yapabileceğini yarına bırakma.",
  "Hayallerini gerçekleştirmek için harekete geç.",
  "Zorluklar, seni daha güçlü yapar."
];

// Rastgele günün sözü seç
document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];

// Tarih ve saat göster
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString('tr-TR', options);
  const timeStr = now.toLocaleTimeString('tr-TR');
  document.getElementById("datetime").innerText = dateStr + " - " + timeStr;
}
updateDateTime();
setInterval(updateDateTime, 1000);
