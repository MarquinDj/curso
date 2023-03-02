function calcular(a, b, operacao) {
  console.log("Realizando uma operação.");
  const resultado = operacao(a, b);
  return resultado;
}

function somar(x, y) {
  console.log("Realizando uma soma.");
  return x + y;
}

calcular(3, 5, somar);

console.log(
  calcular(8, 4, function (x, y) {
    console.log("Realizando uma subtração");
    return x - y;
  })
);

function exibirElemento(elemento, indice, array) {
  console.log(elemento, indice, array);
}

const lista = ["Maçã", "Laranja", "Limão"];

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}

lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
});
