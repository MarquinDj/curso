meters = prompt("Insira a unidade em metros a ser convertida");
unit = prompt(
  "Selecione a numerção da unidade para qual você quer converter: \n1) milímetro (mm)\n2) centímetro (cm)\n3) decímetro (dm)\n4) decâmetro (dam)\n5) hectômetro (hm)\n6) quilômetro (km)"
);

meters = parseFloat(meters);
unit = parseFloat(unit);

switch (unit) {
  case 1:
    alert(meters + " metros" + " são " + meters * 1000 + " milímetros (mm)");
    break;
  case 2:
    alert(meters + " metros" + " são " + meters * 100 + " centímetros (cm)");
    break;
  case 3:
    alert(meters + " metros" + " são " + meters * 10 + " decímetros (dm)");
    break;
  case 4:
    alert(meters + " metros" + " são " + meters * 0.1 + " decâmetros (dam)");
    break;
  case 5:
    alert(meters + " metros" + " são " + meters * 0.01 + " hectômetros (hm)");
    break;
  case 6:
    alert(meters + " metros" + " são " + meters * 0.001 + " quilômetros (km)");
    break;
  default:
    alert("Opção inválida");
}
