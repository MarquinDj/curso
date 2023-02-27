nam = prompt("Digite o seu nome:");

let city = " ";
let contador = 0;

let outra = prompt("Você visitou alguma cidade ?");

while (outra === "Sim") {
  let cidade = prompt("Qual ?");
  city += " - " + cidade + "\n";
  contador++;
  outra = prompt("Você visitou alguma outra cidade ?");
}

alert(
  "O turista " + nam + " visitou " + contador + " cidades, sendo elas: " + city
);
