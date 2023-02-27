nam1 = prompt("Digite o nome do primeiro caminhão");
vel1 = prompt("Digite a velocidade do primeiro caminhão");
nam2 = window.prompt("Digite o nome do segundo caminhão");
vel2 = window.prompt("Digite a velocidade do segundo caminhão");

vel1 = parseFloat(vel1);
vel2 = parseFloat(vel2);

if (vel1 > vel2) {
  window.alert(
    "O " +
      nam1 +
      " é " +
      (vel1 / vel2 - 1) * 100 +
      "%" +
      " mais rápido do que " +
      nam2
  );
} else if (vel2 > vel1) {
  window.alert(
    "O " +
      nam2 +
      " é " +
      (vel2 / vel1 - 1) * 100 +
      "%" +
      " mais rápido do que " +
      nam1
  );
} else if ((vel2 = vel1)) {
  window.alert("As velocidades são IGUAIS");
}
