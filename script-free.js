
function gerarSinal() {
  const sinal = (Math.random() * 2 + 1).toFixed(2);
  const confianca = (Math.random() * 15 + 75).toFixed(1);
  const agora = new Date().toLocaleTimeString();
  document.getElementById("resultado").innerText = `${sinal}x`;
  document.getElementById("confianca").innerText = `${confianca}%`;
  document.getElementById("horario").innerText = agora;
  document.getElementById("alerta-audio").play();
}
setInterval(gerarSinal, 5000);
window.onload = gerarSinal;
