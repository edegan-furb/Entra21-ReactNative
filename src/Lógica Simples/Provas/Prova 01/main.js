const dadosAluno = [];

while (true) {
  const nomeAluno = prompt("Insera o nome do aluno. Ou 'exit' para sair:");

  if (nomeAluno.toLowerCase() === "exit") {
    break;
  }

  const notas = [];
  for (let i = 0; i < 4; i++) {
    const nota = parseFloat(
      prompt(`Insera a nota ${i + 1} para o ${nomeAluno}:`)
    );
    notas.push(nota);
  }
  const frequencia = parseFloat(
    prompt(`Insera a frequência para o ${nomeAluno}:`)
  );

  dadosAluno.push([nomeAluno, ...notas, frequencia]);
}
document.write(`****************** Boletim Escolar ***********************<br><br>`);
for (const aluno of dadosAluno) {
  const nomeBoletim = aluno[0];
  const notasBoletim = aluno.slice(1, 5);
  const frequenciaBoletim = aluno[5];
  const notasBoletimToString = notasBoletim.join(' - ');

  let mediaBoletim;

  if (frequenciaBoletim > 75) {
    const media =
      notasBoletim.reduce((soma, nota) => soma + nota, 0) / notasBoletim.length;
    mediaBoletim = media.toFixed(2);
  }

  let Situacao = "";

  if (frequenciaBoletim > 75) {
    if (mediaBoletim < 5.5) {
      Situacao = "Aluno Reprovado";
    } else if (mediaBoletim >= 5.5 && mediaBoletim <= 7.49) {
      Situacao = "Aluno em Recuperação";
    } else {
      Situacao = "Aluno Aprovado";
    }
  } else {
    Situacao = "Aluno Reprovado por Frequência";
    mediaBoletim = "Média desconsiderada";
  }
  document.write(`Aluno: ${nomeBoletim} &nbsp;&nbsp; Situação: ${Situacao}<br>`)
  document.write(`Notas:  ${notasBoletimToString} &nbsp;&nbsp; Média: ${mediaBoletim}<br><br>`)
}
document.write(`***********************************************************`);
