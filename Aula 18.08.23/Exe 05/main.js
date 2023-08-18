var idade = (prompt("Informe sua Idade: anos, meses, dias"));

var anos = idade.split(",").at(0)
var meses = idade.split(",").at(1)
var dias = idade.split(",").at(2)

qttDias = (+anos * 365) + ( +meses * 30) + +dias

document.write(`${qttDias} <br>`);


