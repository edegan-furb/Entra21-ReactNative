var input = parseFloat(prompt("Informe seu salário:"));
if (input <= 280) {
  document.write(`Salário antes do reajuste: ${input} <br>`);
  document.write(`Percentual de aumento aplicado 20% <br>`);
  document.write(`Valor aumentado ${input * 0.2} <br>`);
  document.write(`Novo salário, após aumento: ${input + input * 0.2} <br>`);
} else if (input >= 280 && input < 700) {
  document.write(`Salário antes do reajuste: ${input} <br>`);
  document.write(`Percentual de aumento aplicado 15% <br>`);
  document.write(`Valor aumentado ${input * 0.15} <br>`);
  document.write(`Novo salário, após aumento: ${input + input * 0.15} <br>`);
} else if (input >= 700 && input < 1500) {
  document.write(`Salário antes do reajuste: ${input} <br>`);
  document.write(`Percentual de aumento aplicado 10% <br>`);
  document.write(`Valor aumentado ${input * 0.1} <br>`);
  document.write(`Novo salário, após aumento: ${input + input * 0.1} <br>`);
} else if (input >= 1500) {
  document.write(`Salário antes do reajuste: ${input} <br>`);
  document.write(`Percentual de aumento aplicado 5% <br>`);
  document.write(`Valor aumentado ${input * 0.05} <br>`);
  document.write(`Novo salário, após aumento: ${input + input * 0.05} <br>`);
}
