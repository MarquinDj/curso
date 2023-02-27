const arr = [
  "Mateus",
  "Marcos",
  "José",
  "Maria",
  "Henrique",
  "Julia",
  "Teresa",
  "Jorge",
  "Ana",
];

let list = "";

do {
  for (let i = 0; i <= arr.length - 1; i++) {
    list += i + 1 + "º " + arr[i] + "\n";
  }

  opt = prompt(
    "A listá de pacientes é:\n" +
      list +
      "\n Escolha uma opção: \n1) Novo Paciente \n2) Consultar Paciente \n3) Sair"
  );

  switch (opt) {
    case "1":
      list = "";
      nam = prompt("Adicione o nome do paciente");
      arr.push(nam);
      break;
    case "2":
      alert("O primeiro paciente é: " + arr.shift());
      list = "";
    default:
      break;
  }
} while (opt !== "3");

alert("Você escolheu sair");
