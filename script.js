
let historico = [1.9, 2.0, 2.1, 2.5, 1.7, 3.0, 2.2];
let tempo = 10;
let segundos = tempo;

function gerarSinal() {
  const media = historico.slice(-5).reduce((a, b) => a + b) / 5;
  const sinal = (media + Math.random() * 1.3).toFixed(2);
  const confianca = Math.min(99, Math.max(75, (media * 30 + Math.random() * 10))).toFixed(1);

  historico.push(parseFloat(sinal));
  if (historico.length > 30) historico.shift();

  document.getElementById("resultado").innerText = `${sinal}x`;
  document.getElementById("confianca").innerText = `${confianca}%`;
  document.getElementById("horario").innerText = new Date().toLocaleTimeString();
}

function atualizarContador() {
  document.getElementById("countdown").innerText = `⏱️ Aguarde: ${segundos}s`;
  segundos--;
  if (segundos < 0) {
    segundos = tempo;
    gerarSinal();
  }
}

setInterval(atualizarContador, 1000);
window.onload = () => {
  gerarSinal();
};
