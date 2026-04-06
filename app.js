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
  const timeStr = now.toLocaleTimeString('tr-TR');
  document.getElementById("datetime").innerText = dateStr + " - " + timeStr;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Progress bar: günün ilerleyişi
function updateProgressBar() {
  const now = new Date();
  const percent = ((now.getHours() * 60 + now.getMinutes()) / 1440) * 100;
  document.getElementById("progress-bar").style.width = percent + "%";
}
updateProgressBar();
setInterval(updateProgressBar, 60000);

// Hava durumu (örnek veri)
document.getElementById("weather").innerText = "🌤 Marmaris: 22°C, Hafif Rüzgar";

// Kişisel selamlama
document.getElementById("greeting").innerText = "Hoşgeldin Hasan 🚀";

// Örnek maç skorlarıTamam Hasan 🙌 Şimdi sana **tamamen düzenli, baştan sona net birleştirilmiş kod** veriyorum. Bu sürümde:  
- Giriş ekranı: logo, günün sözü, tarih/saat, hava durumu, motivasyon barı.  
- Paneller ekranı: ayrı bölümler → ⚽ Canlı Maç Skorları ve 📰 Marmaris Haberleri listeleniyor.  
- Animasyonlar, glow/ripple buton, sesli asistan, panel fade-in hepsi entegre.  

---

## 📂 Dosya Yapısı
