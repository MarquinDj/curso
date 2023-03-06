function addPlayer() {
  const posicao = document.getElementById("posicao").value;
  const nome = document.getElementById("nome").value;
  const numero = document.getElementById("numero").value;

  const confirmation = confirm(
    "Deseja escalar o jogador: " + nome + " - " + numero + ", como " + posicao
  );

  if (confirmation) {
    const jogadores = document.getElementById("time");
    const nameLi = document.createElement("li");
    nameLi.id = "jogador-" + numero;
    nameLi.innerText = posicao + ": " + nome + " - " + numero;
    jogadores.appendChild(nameLi);
    document.getElementById("posicao").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("numero").value = "";
  }
}

function removePlayer() {
  const numero = document.getElementById("numeroRemover").value;
  const idPlayer = document.getElementById("jogador-" + numero);

  const confirmationR = confirm(
    "Remover o jogador " + idPlayer.innerText + " do time ?"
  );

  if (confirmationR) {
    document.getElementById("time").removeChild(idPlayer);
    document.getElementById("numeroRemover").value = "";
  }
}
