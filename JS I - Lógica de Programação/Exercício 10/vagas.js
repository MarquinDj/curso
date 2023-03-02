vagas = [];

do {
  opt = prompt(
    "Escolha uma opção" +
      "\n1) Lista de Vagas disponíveis \n2) Criar uma vaga \n3) Visualizar uma vaga \n4) Inscrever um candidato em uma vaga \n5)Excluir uma vaga \n6)Sair"
  );

  switch (opt) {
    case "1":
      if (vagas.length > 0) {
        for (let i = 0; i < vagas.length; i++) {
          alert(
            "Index da vaga: " +
              i +
              "\nNome: " +
              vagas[i].nome +
              "\nInscritos: " +
              vagas[i].candidato.length
          );
        }
      } else {
        alert("Não há vagas disponíveis");
      }

      break;
    case "2":
      vaga = {};
      vaga.nome = prompt("Digite o nome da vaga: ");
      vaga.descricao = prompt("Digite a descrição da vaga");
      vaga.data = prompt("Digite a data limite da vaga");
      vaga.candidato = [];
      let confirma = confirm(
        "Salvar esta vaga ?\n" +
          "\nNome da vaga: " +
          vaga.nome +
          "\nDescrição da vaga: " +
          vaga.descricao +
          "\nData limite: " +
          vaga.data
      );

      if (confirma) {
        vagas.push(vaga);
      }
      break;

    case "3":
      if (vagas.length > 0) {
        i = prompt("Digite o index da vaga");
        if (i >= vagas.length || i < 0) {
          alert("Índice inválido");
        } else {
          alert(
            "\n-> O índice da vaga é: " +
              i +
              "\n-> O nome da vaga é: " +
              vagas[i].nome +
              "\n-> A descrição da vaga é: " +
              vagas[i].descricao +
              "\n -> A data limite é: " +
              vagas[i].data
          );
        }
      } else {
        alert("Não há vagas disponíveis");
      }
      break;

    case "4":
      if (vagas.length > 0) {
        i = prompt("Digite o index da vaga");
        elemento = prompt("Digite o nome do candidato");

        confi = confirm(
          "Deseja adicionar o candidato " +
            elemento +
            " da vaga " +
            vagas[i].nome
        );

        if (confi) {
          vagas[i].candidato.push(elemento);
          alert("Inscrição Realizada");
        }
      } else {
        alert("Não há vagas para adicionar candidatos");
      }
      break;

    case "5":
      if (vagas.length > 0) {
        i = prompt("Digite o index da vaga");
        conf = confirm("Deseja excluir esta vaga ?\n" + vagas[i].nome);

        if (conf) {
          vagas.splice(i, 1);
          alert("Vaga Excluida");
        }
      } else {
        alert("Não há vagas para excluir");
      }
      break;

    case "5":
      alert("Você escolheu sair");

    default:
      alert("Escolha uma opção válida");
      break;
  }
} while (opt !== "6");
