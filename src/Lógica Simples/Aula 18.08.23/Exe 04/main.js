var valorHora, salarioMensal, horasTrabalhadasMes;

salarioMensal = parseFloat(prompt("Digite o salário mensal"));
horasTrabalhadasMes = parseFloat(prompt("Digite as horas trabalhadas por mês"));

valorHora = salarioMensal/horasTrabalhadasMes;

document.write(`valor hora -> ${valorHora.toLocaleString("BRL",{style: "currency", currency: "BRL"})} <br>`);

