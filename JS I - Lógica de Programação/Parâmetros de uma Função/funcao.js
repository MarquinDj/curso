function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

dobro(5);

function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + " !");
}

dizerOla("Marquin");

function soma(a, b) {
  alert("O resultado da som,a é " + (a + b));
}

soma(7, 6);
soma(1, 4);

function criarUsuario(nome, email, senha, tipo) {
  const usuario = { nome, email, senha, tipo };

  console.log(usuario);
}

criarUsuario("Marquin", "marquin@gmail.com", "312231", "admin");

function novoUsuario(nome, tipo = "admin", email, senha) {
  const usuario = { nome, email, senha, tipo };

  console.log(usuario);
}

criarUsuario("Marquin", "marquin@gmail.com", "312231");

function muitosParametros(
  nome,
  telefone,
  endereco,
  aniversario,
  email,
  senha
) {}

function objetoComoParametro(usuario) {
  usuario.nome;
  usuario.email;
}

const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  endereco: "",
  aniversario: "",
};
