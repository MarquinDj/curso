let money = prompt("Quanto dinheiro está disponível ?");

let opt = prompt(
  "A quantidade de dinheiro disponível é de: R$" +
    money +
    " " +
    "\n Escolha uma opção: \n1) Adicionar dinheiro \n2) Remover dinheiro \n3) Encerrar"
);

do {
  if (opt === "1") {
    plus = prompt("Insira a quantidade de dinheiro a ser adicionada: ");
    money = parseFloat(money) + parseFloat(plus);
  } else if (opt === "2") {
    plus = prompt("Insira a quantidade de dinheiro a ser removida: ");
    money = parseFloat(money) - parseFloat(plus);
  }

  opt = prompt(
    "A quantidade de dinheiro disponível é de: R$" +
      money +
      "\nEscolha uma opção: \n1) Adicionar dinheiro \n2) Remover dinheiro \n3) Encerrar"
  );
} while (opt !== "3");

alert("Acabou");
