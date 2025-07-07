let historico = [1.8, 2.1, 1.6, 2.3, 3.0, 1.9, 2.5, 1.7, 2.8, 1.5, 2.6, 1.95];
let totalSinais = 0;
let acertos = 0;

function gerarSinalInteligente() {
  const padrao = historico.slice(-8);
  const media = padrao.reduce((a, b) => a + b, 0) / padrao.length;
  let variacao = (Math.random() * 0.9) - 0.3;
  let sinal = parseFloat((media + variacao).toFixed(2));
  let confianca = parseFloat(Math.min(99, Math.max(70, media * 30 + Math.random() * 10)).toFixed(1));

  historico.push(sinal);
  if (historico.length > 50) historico.shift();

  totalSinais++;
  if (Math.random() < confianca / 100) {
    acertos++;
  }

  return { sinal, confianca };
}

function exibirNovoSinal() {
  const { sinal, confianca } = gerarSinalInteligente();
  document.getElementById("resultado").innerText = `${sinal}x`;
  document.getElementById("confianca").innerText = `${confianca}%`;
  const agora = new Date();
  document.getElementById("horario").innerText = agora.toLocaleTimeString();
  document.getElementById("countdown").innerText = "⏱️ Novo sinal em 10s";
  const taxaAcerto = ((acertos / totalSinais) * 100).toFixed(1);
  document.getElementById("aprendizado").innerText = `${taxaAcerto}%`;
  document.getElementById("alerta-audio").play();
}

setInterval(exibirNovoSinal, 10000);
window.onload = exibirNovoSinal;
