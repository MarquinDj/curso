do {
  opt = prompt(
    "De qual figura você deseja calcular a área ?" +
      "\n1) Triângulo \n2) Retângulo \n3) Quadrado \n4)Trapézio \n5)Círculo \n6)Sair"
  );

  switch (opt) {
    case "1":
      baseT = parseFloat(prompt("Digite a base do triângulo"));
      alturaT = parseFloat(prompt("Digite a altura do triângulo"));

      function areaTriangulo(baseT, alturaT) {
        areaT = (baseT * alturaT) / 2;
        return areaT;
      }

      alert("A área do triângulo é de: " + areaTriangulo(baseT, alturaT));
      break;
    case "2":
      baseR = parseFloat(prompt("Digite a base do retângulo"));
      alturaR = parseFloat(prompt("Digite a altura do retângulo"));

      function areaRetangulo(baseR, alturaR) {
        areaR = baseR * alturaR;
        return areaR;
      }

      alert("A área do retângulo é de: " + areaRetangulo(baseR, alturaR));
      break;

    case "3":
      lado = parseFloat(prompt("Digite o lado do quadrado"));

      function areaQuadrado(lado) {
        areaQ = lado * lado;
        return areaQ;
      }

      alert("A área do quadrado é de: " + areaQuadrado(lado));
      break;

    case "4":
      baseMaior = parseFloat(prompt("Digite a base maior do trapézio"));
      baseMenor = parseFloat(prompt("Digite a base menor do trapézio"));
      alturaT = parseFloat(prompt("Digite a altura do trapézio"));

      function areaTrapezio(baseMaior, baseMenor, alturaT) {
        areaT = ((baseMaior + baseMenor) * alturaT) / 2;
        return areaT;
      }

      alert(
        "A área do trapézio é de: " +
          areaTrapezio(baseMaior, baseMenor, alturaT)
      );
      break;

    case "5":
      raio = parseFloat(prompt("Digite o raio do círculo"));

      function areaCirculo(raio) {
        areaC = 3.14 * raio * raio;
        return areaC;
      }

      alert("A área do circulo é de: " + areaCirculo(raio));
      break;

    case "6":
      alert("Você escolheu sair");
      break;
    default:
      alert("Escolha uma opção válida");
      break;
  }
} while (opt !== "6");
