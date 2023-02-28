imoveis = [];

do {
  opt = prompt(
    "A Quantidade de imóveis é:\n" +
      imoveis.length +
      "\n Escolha uma opção: \n1) Adicionar um imóvel \n2) Consultar os imóveis cadastrados \n3) Sair"
  );

  switch (opt) {
    case "1":
      const imv = {};
      imv.nome = prompt("Digite o nome do propriétário");
      imv.quartos = prompt("Digite a quantidade de quartos");
      imv.banheiros = prompt("Digite  a quantidade de banheiros");
      imv.garagem = prompt("O imóvel possui garagem ?");
      imoveis.push(imv);
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].nome +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui Garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Você escolheu sair");
      break;
    default:
      alert("Finalizando");
      break;
  }
} while (opt !== "3");
