var emergencia = 0;
var prontoAtendimento = 0;
var poucoUrgente = 0;
var naoUrgente = 0;
var nomes = [];

while (true) {
  var input = prompt(
    `Informe seu nome e faixa de atendimento.\n 1 - Emergência\n 2 - Pronto Atendimento\n 3 - Pouco Urgente\n 4 - Não Urgente\n Digite 'exit' para encerrar.`
  );
  if (input.toLowerCase() === "exit") {
    break;
  }

  var split = input.split("-");
  var faixa = parseInt(split[1].trim());

  nomes.push(input);

  switch (faixa) {
    case 1:
      emergencia++;
      break;
    case 2:
      prontoAtendimento++;
      break;
    case 3:
      poucoUrgente++;
      break;
    case 4:
      naoUrgente++;
      break;
  }
}

document.write(`&#x2193 REPORT &#x2193 <br> <br>`);

document.write(`1 - Emergência: ${emergencia} <br>`);
document.write(`2 - Pronto Atendimento: ${prontoAtendimento} <br>`);
document.write(`3 - Pouco Urgente: ${poucoUrgente} <br>`);
document.write(`4 - Não Urgente: ${naoUrgente} <br> <br>`);
document.write(`&#x2193 DATA &#x2193 <br> <br>`);

for (const element of nomes) {
  document.write(`${element} <br>`);
}
