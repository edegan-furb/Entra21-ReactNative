document.write(`EXE 01 <br>`);
var base = parseFloat(prompt("Qual o valor da base?"));
var altura = parseFloat(prompt("Qual o valor da altura?"));
document.write(`Área do triangulo: ${(base * altura) / 2} <br> <br>`);

document.write(`EXE 02 <br>`);
var saldo = 0;
document.write(`Saldo Atual: ${saldo} <br>`);
var deposito = parseFloat(prompt("Qual o valor do deposito?"));
saldo += deposito;
document.write(`Saldo Atual: ${saldo} <br>`);
var retirada = parseFloat(prompt("Qual o valor da retirada?"));
saldo -= retirada;
document.write(`Saldo Atual: ${saldo} <br> <br>`);

document.write(`EXE 03 <br>`);
var v1, v2;
var v1 = parseFloat(prompt("Qual o primeiro valor?"));
var v2 = parseFloat(prompt("Qual o segundo valor?"));
document.write(
  `Soma: ${v1 + v2} <br> Sub: ${v1 - v2} <br> Div: ${v1 / v2} <br> Multi: ${
    v1 * v2
  }`
);
