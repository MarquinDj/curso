nome = window.prompt("Insira Seu Primeiro Nome");
sobrenome = window.prompt("Insira Seu Sobrenome");
estudo = window.prompt("Insira Seu Campo de estudo");
nascimento = window.prompt("Insira Seu ano de nascimento");

window.alert(
  `O nome é ${nome} ${sobrenome} 
   A área de estudo é: ${estudo} 
   A idade é: ${2023 - parseFloat(nascimento)}`
);
