// Vacina
interface Vacina {
  cpf: string;
  nome: string;
  dataNascimento: string;
  nomeVacina: string;
  dataVacina: string;
  returnData: string;
}

// Referências de elemento
const cpf = document.getElementById("cpf") as HTMLInputElement;
const form = document.getElementById("cadastroForm") as HTMLFormElement;
const dadosCadastradosDiv = document.getElementById(
  "dadosCadastrados"
) as HTMLDivElement;

// Array onde os dados vão ser salvos
const dadosCadastrados: Vacina[] = [];

//  Calcular a nova data de retorno 30 dias após a data atual
//  Pensei que fosse calcular a nova data de retorno 30 dias após a data de vacinação
/*
  function calcularDataRetorno(dataVacinacao: string): string {
    const dataVacinacaoObj = new Date(dataVacinacao);
    dataVacinacaoObj.setDate(dataVacinacaoObj.getDate() + 30); 
   return dataVacinacaoObj.toLocaleDateString();
  } 
*/
function calcularDataRetorno(): string {
  const dataVacinacaoObj = new Date();
  dataVacinacaoObj.setDate(dataVacinacaoObj.getDate() + 30);
  return dataVacinacaoObj.toLocaleDateString();
}

// Apagar dado por index do array
function apagarVacina(index: number): void {
  dadosCadastrados.splice(index, 1);
  const dadosFormatados = dadosCadastrados.map(vacinaHTML).join("");
  dadosCadastradosDiv.innerHTML = dadosFormatados;
}

// Como os dados vão ser organizados no HTML
function vacinaHTML(dados: Vacina, index: number): string {
  // Formatar data
  const dataFormatada = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };
  return `
  <div class="vacina-container">
    <div class="delete-button" onclick="apagarVacina(${index})">
      x
    </div>
    <div class="vacina-group">
    <strong>CPF:</strong> ${dados.cpf}<br />
    <strong>Nome:</strong> ${dados.nome}<br />
    <strong>Data de Nascimento:</strong> ${dataFormatada(
      dados.dataNascimento
    )}<br />
    <strong>Nome da Vacina:</strong> ${dados.nomeVacina}<br />
    <strong>Data de Vacinação:</strong> ${dataFormatada(dados.dataVacina)}<br />
        <strong>Data de Retorno:</strong> ${dados.returnData}<br />
      </div>
    </div>
  `;
}

// Submit Event
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  // Pega CPF
  const cpf = formData.get("cpf") as string;
  // Alerts
  if (cpf.length !== 14) {
    alert("CPF deve ter 11 caracteres.");
    return;
  }
  // Informar valores
  const formObject: Vacina = {
    cpf: formData.get("cpf") as string,
    nome: formData.get("nome") as string,
    dataNascimento: formData.get("dataNascimento") as string,
    nomeVacina: formData.get("nomeVacina") as string,
    dataVacina: formData.get("dataVacina") as string,
    returnData: calcularDataRetorno(),
  };
  // Insere os dados no array
  dadosCadastrados.push(formObject);
  // Formata dados do array como VacinaHTLM
  const dadosFormatados = dadosCadastrados.map(vacinaHTML).join("");
  // Manda para a Div
  dadosCadastradosDiv.innerHTML = dadosFormatados;
});

// Formatar CPF
cpf.addEventListener("input", function () {
  let cpfFormatado = cpf.value.replace(/\D/g, "");
  cpfFormatado = cpfFormatado.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4"
  );
  cpf.value = cpfFormatado;
});
