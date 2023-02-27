number = prompt("Informe um número");
list = "";

for (let i = 1; i <= 20; i++) {
  list += " > " + number + " * " + i + " = " + i * number + "\n";
}

alert(list);
