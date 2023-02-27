atack = prompt("Digite o nome do atacante");
dam = prompt("Digite seu poder de ataque");

defender = window.prompt("Digite o nome do defensor");
lp = window.prompt("Digite os pontos de vida do defensor");
dp = window.prompt("Digite o poder de defesa do defensor");
shield = window.prompt("O defensor possui escudo ? (0 ou 1)");

dam = parseFloat(dam);
defender = parseFloat(defender);
lp = parseFloat(lp);
dp = parseFloat(dp);

if (shield == 0 && dam > dp) {
  window.alert(
    "O dano causado foi de: " +
      (dam - dp) +
      "\nA vida restante do defensor é de: " +
      (lp - (dam - dp))
  );
} else if (shield == 1 && dam > dp) {
  window.alert(
    "O dano causado foi de: " +
      (dam - dp) / 2 +
      "\nA vida restante do defensor é de: " +
      (lp - (dam - dp) / 2)
  );
} else if (dam <= dp) {
  window.alert("O dano causado foi de: " + "0");
}
