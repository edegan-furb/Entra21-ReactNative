var pontosLider = parseInt(
  prompt(
    "Digite a quantidade de pontos do líder do campeonato brasileiro de futebol"
  )
);
var pontosLanterna = parseInt(
  prompt("Digite a quantidade de pontos do time lanterna.")
);

var PontosNecessarios = (pontosLider - pontosLanterna) / 3;

document.write(
  `numero de vitórias necessárias para que o time lanterna alcance ou ultrapasse o líder: ${PontosNecessarios}`
);
