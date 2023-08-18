var id, cod, preço, qtt;

id = parseInt(prompt("Digite a Identificação do vendedor"));
cod = parseInt(prompt("Digite o Código da peça"));
preço = parseFloat(prompt("Digite o Preço unitário da peça"));
qtt = parseInt(prompt("Digite o Quantidade vendida"));

var comissão = (preço * qtt) *0.05;

document.write(
  `Identificação: ${id} <br> Código da peça: ${cod} <br> Preço: ${preço} <br> Quantidade: ${qtt} <br> Comissão: ${comissão}`
);
