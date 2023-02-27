const arr = ["Ás", "2", "3", "4", "5", "6", "7"];

let list = "";

do {
  for (let i = 0; i <= arr.length - 1; i++) {
    list += i + 1 + "º " + arr[i] + "\n";
  }

  opt = prompt(
    "A Quantidade de cartas no baralho é:\n" +
      arr.length +
      "\n Escolha uma opção: \n1) Adicionar uma carta ao baralho \n2) Retirar uma carta \n3) Sair"
  );

  switch (opt) {
    case "1":
      list = "";
      nam = prompt("Adicione uma carta ao baralho");
      arr.push(nam);
      break;
    case "2":
      alert("A carta retirada foi: " + arr.pop());
      list = "";
    default:
      break;
  }
} while (opt !== "3");

alert("Você escolheu sair");
