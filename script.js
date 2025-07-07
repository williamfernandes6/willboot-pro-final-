let historico = [1.8, 2.1, 1.5, 2.0, 3.2, 1.7, 2.7, 1.9, 1.6, 3.0];
let tempoVoo = 0;
let segundos = 0;
let emVoo = false;

function gerarSinalInteligente() {
  const padrao = historico.slice(-5);
  const media = padrao.reduce((a, b) => a + b, 0) / padrao.length;
  let sinal = parseFloat((media + Math.random() * 1.2).toFixed(2));
  let confianca = parseFloat(Math.min(95, Math.max(70, media * 30 + Math.random() * 15)).toFixed(1));
  historico.push(sinal);
  if (historico.length > 30) historico.shift();
  return { sinal, confianca };
}

function iniciarNovoCiclo() {
  emVoo = true;
  tempoVoo = Math.floor(Math.random() * 10) + 6;
  segundos = tempoVoo;
  document.getElementById("resultado").innerText = "✈️ Avião no ar...";
  document.getElementById("confianca").innerText = "--%";
  document.getElementById("horario").innerText = "--:--:--";
  document.getElementById("countdown").innerText = `⏱️ Aguarde: ${segundos}s`;
}

function exibirNovoSinal() {
  const novo = gerarSinalInteligente();
  document.getElementById("resultado").innerText = `${novo.sinal}x`;
  document.getElementById("confianca").innerText = `${novo.confianca}%`;
  const agora = new Date();
  document.getElementById("horario").innerText = agora.toLocaleTimeString();
  document.getElementById("alerta-audio").play();
  iniciarNovoCiclo();
}

setInterval(() => {
  if (emVoo) {
    segundos--;
    document.getElementById("countdown").innerText = `⏱️ Aguarde: ${segundos}s`;
    if (segundos <= 0) {
      emVoo = false;
      exibirNovoSinal();
    }
  }
}, 1000);

window.onload = iniciarNovoCiclo;
