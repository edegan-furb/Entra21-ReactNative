var positive = 0;
var answer,
  answer = prompt(`Telefonou para a vítima?`);
if (answer.toLowerCase() == "y") {
  positive++;
}
answer = prompt(`Esteve no local do crime?`);
if (answer.toLowerCase() == "y") {
  positive++;
}
answer = prompt(`Mora perto da vitima?`);
if (answer.toLowerCase() == "y") {
  positive++;
}
answer = prompt(`Devia para a vítima?`);
if (answer.toLowerCase() == "y") {
  positive++;
}
answer = prompt(`Já trabalhou com a vítima?`);
if (answer.toLowerCase() == "y") {
  positive++;
}
document.write(`Resultado <br>`);
if (positive == 2) {
  document.write(`Suspeita <br>`);
} else if (positive == 3 || positive == 4) {
  document.write(`Cúmplice <br>`);
} else if (positive == 5) {
  document.write(`Assasino <br>`);
} else {
  document.write(`inocente <br>`);
}
