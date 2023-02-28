function ccalcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(7, 2);

console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };
  return produto;
}

const notebook = criarProduto("Notebook Intel COre i3 8Gb", 2500);

console.log(notebook);

console.log(criarProduto("Notebook Intel COre i3 8Gb", 2500));

function areaRetangular(base, altura) {
  const area = base * altura;
  return area;
}

console.log(areaRetangular(3, 5));

function ola() {
  let texto = "...";
  return texto;
  texto = "olá mundo";
  console.log(texto);
}

function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de Idade";
  } else {
    return "Menor de Idade";
  }
}
