let pessoa = {
  nome: "Marcus",
  Idade: 21,
  dizerOla() {
    console.log("Olá, Mundo! meu nome é" + this.nome);
  },
};

console.log(pessoa);

pessoa.dizerOla();
