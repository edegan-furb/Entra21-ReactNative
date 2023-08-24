var array = [];
for (let i = 2; i <= 100; i += 2) {
  array.push(i);
}
var totalPar = 0;
for (let element of array) {
  totalPar += element;
}

document.write(`${totalPar}`);
document.write(`<br>`);

var sequencia = [];
var input = prompt(`Informe uma sequência de números: `);
var split = input.split(",");

for (var i = 0; i < split.length; i++) {
  var num = parseFloat(split[i]);
  if (!isNaN(num)) {
    sequencia.push(num);
  }
}

document.write(`<br>`);
for (let element of sequencia) {
  if (element % 2 === 0) {
    document.write(`${element}<br>`);
  }
}

document.write(`<br>`);

for (let element of sequencia) {
  if (element % 2 !== 0) {
    document.write(`${element}<br>`);
  }
}

document.write(`<br>`);

var seq = [];
var inp = prompt(`Informe uma sequência de números: `);
var sp = inp.split(",");
var totalSeq = 0;

for (var i = 0; i < sp.length; i++) {
  var num = parseFloat(sp[i]);
  if (!isNaN(num)) {
    seq.push(num);
    totalSeq += num;
  }
}

var media = totalSeq / seq.length;
document.write(`${media}`);
