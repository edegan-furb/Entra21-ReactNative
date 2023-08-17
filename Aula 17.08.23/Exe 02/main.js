
var qqt = 1;

var nome = prompt("Qual o seu nome?");
var idade = prompt("Qual a sua idade?");

var nota1= parseInt(prompt(`Qual sua nota ${qqt++} ?`));
document.write(`Nota ${qqt}: ${nota1} <br>`);

var nota2= parseInt(prompt(`Qual sua nota ${qqt++} ?`));
document.write(`Nota ${qqt}: ${nota2} <br>`);

var nota3= parseInt(prompt(`Qual sua nota ${qqt} ?`));
document.write(`Nota ${qqt}: ${nota3} <br> <br>`);

var media = (nota1 + nota2 +nota3)/qqt


document.write(`Nome: ${nome} <br> Idade: ${idade} <br>`);
document.write(`Média: ${media}`);
