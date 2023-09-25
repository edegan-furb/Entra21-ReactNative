var valorProduto = prompt("Digite o valor");
var PorcentagemDesconto = prompt("Digite o deconto");
var valorDesconto = (+valorProduto * ((+PorcentagemDesconto) /100));
var valorProdutoDesconto = +valorProduto - +valorDesconto;

document.write(`Novo valor: ${valorProdutoDesconto}`);