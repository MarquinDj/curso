const word = prompt("Escreve um palavra a ser analisada como palindromo");
let inverse = "";

for (let i = word.length - 1; i >= 0; i--) {
  inverse += word[i];
}
if (word === inverse) {
  alert(word + " é uma palavra palindromo, pois é igual a " + inverse);
} else {
  alert(
    word +
      " não é uma palavra palindromo, pois sua inversa " +
      inverse +
      " não é igual."
  );
}
