
function gerarSinalVIP() {
  const sinal = (Math.random() * 2 + 2).toFixed(2);
  const confianca = (Math.random() * 9 + 90).toFixed(1);
  const agora = new Date().toLocaleTimeString();
  document.getElementById("resultado").innerText = `${sinal}x`;
  document.getElementById("confianca").innerText = `${confianca}%`;
  document.getElementById("horario").innerText = agora;
  document.getElementById("alerta-audio").play();
}
setInterval(gerarSinalVIP, 10000);
window.onload = gerarSinalVIP;
