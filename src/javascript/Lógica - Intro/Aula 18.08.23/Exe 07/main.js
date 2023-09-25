var saldo = prompt("Digite o salário");
var reajuste = prompt("Digite o reajuste em %");
var valorReajuste = (+saldo * +reajuste) /100;


document.write(`Novo saldo: ${valorReajuste}`);