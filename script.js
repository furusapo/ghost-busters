const emf = document.getElementById("emf");
const statusText = document.getElementById("statusText");
let anomaly = false;

setInterval(() => {
  const value = (0.08 + Math.random() * 0.24).toFixed(2);
  emf.textContent = value;

  if (Math.random() > 0.88) {
    anomaly = true;
    statusText.textContent = "SIGNAL DETECTED";
    statusText.style.color = "#ff5b5b";
    setTimeout(() => {
      anomaly = false;
      statusText.textContent = "NO ANOMALY";
      statusText.style.color = "#c7ff38";
    }, 1600);
  }
}, 900);

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.getElementById("formMessage");
  message.textContent = "送信デモが完了しました。実運用時はフォーム送信先を接続してください。";
  event.currentTarget.reset();
});
