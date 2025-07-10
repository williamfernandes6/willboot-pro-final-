function ativarVoucher() {
  const code = document.getElementById("voucher").value;
  fetch("https://willboot-backend.onrender.com/ativar-voucher", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ codigo: code })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "ativo") {
      alert("Acesso VIP ativado com sucesso!");
      window.location.href = "sinais.html";
    } else {
      alert("Voucher inválido ou expirado.");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const painel = document.getElementById("sinais");
  if (painel) {
    fetch("https://willboot-backend.onrender.com/sinais")
      .then(res => res.json())
      .then(data => {
        painel.innerHTML = "";
        data.forEach(sinal => {
          const el = document.createElement("div");
          el.innerHTML = `
            <p>⏱️ ${sinal.horario} | X: ${sinal.alcance}x | ${sinal.tempo} seg</p>
            <p>Confiança: ${sinal.confianca}%</p><hr>`;
          painel.appendChild(el);
          const audio = document.getElementById("alerta-audio");
          if (audio) audio.play();
        });
      });
  }
});
