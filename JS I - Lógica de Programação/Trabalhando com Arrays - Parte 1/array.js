const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

//Adicionar Elementos
//push
let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

//unshift
tamanho = arr.unshift("Boromir");
console.log(arr);
console.log(tamanho);

// Remover elementos
//pop
const ultimoElemento = array.pop();
console.log(arr);
console.log(ultimoElemento);

//shift
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//Pesquisar por um elemento
//includes

const inclui = array.includes("Gandalf");

//indexOf
const indice = arr.indexOf("Gaandalf");
console.log(indice);

//cortar e concatenar
//slice
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

//concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituição dos Elementos
//splice
const a = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
