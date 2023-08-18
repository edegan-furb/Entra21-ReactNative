var qttMIN, qttMAX;
qttMAX = parseFloat(prompt("Digite Quatidade Máxima"));
qttMIN = parseFloat(prompt("Digite Quatidade Mínima"));

document.write(`${(qttMIN + qttMAX) / 2}`);
