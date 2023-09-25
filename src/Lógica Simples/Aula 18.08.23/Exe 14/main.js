var tempo = parseFloat(prompt("Digite o tempo em horas"));
var velocidade = parseFloat(prompt("Digite a velocidade média"));


var dist = (tempo * velocidade);
var litrosUsados = dist /12

document.write(
  `Velociade Média: ${velocidade} <br> Tempo gasto: ${tempo} <br> Distância percorrida: ${dist} <br> Quantidade de litros utilizados: ${litrosUsados}`
);
