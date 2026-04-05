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
