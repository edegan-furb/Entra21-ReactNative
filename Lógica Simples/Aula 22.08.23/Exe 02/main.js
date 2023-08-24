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

  switch (op[0]) {
    case "+":
      result = v1 + v2;
      document.write(`${input} = ${result} <br>`);
      break;
    case "-":
      result = v1 - v2;
      document.write(`${input} = ${result} <br>`);
      break;
    case "*":
      result = v1 * v2;
      document.write(`${input} = ${result} <br>`);
      break;
    case "/":
      result = v1 / v2;
      document.write(`${input} = ${result} <br>`);
      break;
  }
}
