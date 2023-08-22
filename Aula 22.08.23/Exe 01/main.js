var result;
const operatorPattern = /[\+\-\*\//]/;

while (true) {
  var input = prompt(`Informe sua operação`);
  if (input.toLowerCase() === "exit") {
    break;
  }

  var split = input.split(operatorPattern);
  var v1 = parseFloat(split[0]);
  var v2 = parseFloat(split[1]);
  const op = input.match(operatorPattern);

  if (op[0] === "+") {
    result = v1 + v2;
  } else if (op[0] === "-") {
    result = v1 - v2;
  } else if (op[0] === "*") {
    result = v1 * v2;
  } else if (op[0] === "/") {
    result = v1 / v2;
  }
  document.write(`${input} = ${result} <br>`)
}
