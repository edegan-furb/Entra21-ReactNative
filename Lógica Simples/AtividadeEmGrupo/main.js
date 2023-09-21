/*
EQUIPE:
Ana, Lucas, Eduardo, Bruno, Cleiton.

PROBLEMA:
Dona Maria tem uma farmácia e está com problemas em relação a validade de seus produtos. No mês de agosto ela perdeu 30 caixas de remédios que venceram.
Faça um algorítmo para adicionar e remover produtos.
Deve-se adicionar nome e validade do produto.
Deve-se remover por posição o produto.
Deve-se perguntar se o usuário quer remover ou adicionar.
*/

//Variáveis:
var Produtos = [];
var Validades = [];

//Enquanto o usuário quiser adicionar ou retirar produtos:
while (true) {
  var Input = prompt(
    "Para adicionar produto, insira ADICIONAR. Para retirar produto, insira RETIRAR. Obs: Caso queira encerrar a sessão, digite EXIT."
  );

  //Se o usuário não quiser adicionar ou retirar, ele sai do loop
  if (Input === null || Input.toLowerCase() === "exit") {
    break;
  }

  //Escolhe se quer adicionar ou remover
  switch (Input.toLowerCase()) {
    //Caso "adicionar", pede o nome do produto e a validade e adiciona no array o produto e a validade:
    case "adicionar":
      //Enquanto quiser adicionar produtos
      while (true) {
        var produto = prompt(
          "Informe o produto que deseja cadastrar. Obs: Caso queira encerrar a sessão, digite EXIT."
        );
        // Se quiser parar de adicionar e voltar para o início
        if (produto === null || produto.toLowerCase() === "exit") {
          break;
        }

        var Validade = prompt("Informe a validade do produto.");
        //Produto e validade adicionados em seus devidos arrays
        Produtos.push(produto);
        Validades.push(Validade);
        alert("Produto cadastrado com sucesso");
      }
      // Imprime os produtos e validades adicionados
      document.write("<p>Produtos adicionados:</p>");
      for (let Elementos = 0; Elementos < Validades.length; Elementos++) {
        document.write(
          "Produto " +
            Elementos +
            ": " +
            Produtos[Elementos] +
            " = " +
            Validades[Elementos] +
            "<br>"
        );
      }
      break;
    //Caso "retirar", pede a posição do produto:
    case "retirar":
      //Enquanto quer retirar
      while (true) {
        var Index = parseInt(
          prompt(
            "Informe o Index que deseja retirar. Obs: Caso queira encerrar a sessão, digite EXIT."
          )
        );
        //Se não quer mais retirar
        if (isNaN(Index)) {
          break;
        }

        if (Index >= 0 && Index < Produtos.length) {
          //Remove produto e validade da posição informada
          Produtos.splice(Index, 1);
          Validades.splice(Index, 1);
          alert("Produto removido com sucesso");
        } else {
          alert("Índice inválido. Digite um índice válido.");
        }
      }
      //Imprime a tabela atualizada sem os produtos removidos
      document.write("<p>Produtos restantes:</p>");
      for (let Elementos = 0; Elementos < Validades.length; Elementos++) {
        document.write(
          "Produto " +
            Elementos +
            ": " +
            Produtos[Elementos] +
            " = " +
            Validades[Elementos] +
            "<br>"
        );
      }
      break;

    default:
      alert("Comando inválido. Use 'ADICIONAR' ou 'RETIRAR'.");
  }
}