var nome, idade;

nome = prompt("Informe o seu nome ");
idade = parseInt(prompt("Informe sua Idade"));

document.write(`nome: ${nome} <br>`);
document.write(`idade: ${idade} <br>`);
console.log(`nome: ${nome}`);
console.log(`idade: ${idade}`);

nome = prompt("Informe o seu novo nome.\nObs: 10 anos adicionados a sua nova identidade.");
idade +=10
document.write(`novo nome: ${nome}  <br>`);
document.write(`nova idade: ${idade} <br>`);
console.log(`novo nome: ${nome}`);
console.log(`nova idade: ${idade}`);

