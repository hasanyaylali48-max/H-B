// Kadın sesli asistan - hoşgeldiniz mesajı
function speakWelcome() {
  const msg = new SpeechSynthesisUtterance("Hoşgeldiniz, H ve B uygulamasına giriş yapıyorsunuz.");
  msg.lang = "tr-TR";
  msg.pitch = 1.2; // kadın sesi için daha ince ton
  msg.rate = 1;    // normal hız
  window.speechSynthesis.speak(msg);
}

// Sayfa açıldığında otomatik sesli mesaj
window.onload = () => {
  speakWelcome();
};

// Panellere geçiş
function goToPanels() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("panels").classList.remove("hidden");
}
