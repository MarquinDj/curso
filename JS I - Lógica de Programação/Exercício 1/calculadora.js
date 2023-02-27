numero1 = window.prompt("Insira o primeiro número");
numero2 = window.prompt("Insira o segundo número");
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

window.alert(
  `A soma é ${numero1 + numero2}  
  A subtração é ${numero1 - numero2} 
  O produto ${numero1 * numero2}
  A razão ${numero1 / numero2}
  `
);
