for (let i = 0; i <= 10; i++) {
  document.write(`${i} <br>`);
}

document.write(`<br> <br>`);

for (let i = 2; i <= 20; i += 2) {
  document.write(`${i} <br>`);
}

document.write(`<br> <br>`);

var sequencia = [];
var input = prompt(`Informe uma sequência de números: `);
var split = input.split(",");

for (var i = 0; i < split.length; i++) {
  var num = parseFloat(split[i]);
  if (!isNaN(num)) {
    sequencia.push(num);
  }
}

document.write(`${Math.max.apply(null, sequencia)}`);
document.write(`<br> <br>`);

var input = prompt(`Informe um número: `);
for (var i = 0; i <= 10; i++) {
  document.write(`${input * i}<br>`);
}
