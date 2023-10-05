// Define a estrutura dos dados da vacinação
interface Vacinacao {
  cpf: string;
  nome: string;
  dataNascimento: string;
  nomeVacina: string;
  dataVacina: string;
  dataRetorno: string;
}
// Obtém referência no DOM
const cpfInput = document.getElementById("cpf") as HTMLInputElement;
const cadastroForm = document.getElementById("cadastroForm") as HTMLFormElement;
const dadosCadastradosContainer = document.getElementById(
  "dadosCadastrados"
) as HTMLDivElement;

// Array para guardar os dados das vacinações cadastradas
const dadosCadastrados: Vacinacao[] = [];

// Função para calcular a data de retorno, 30 dias após a data da vacinação
function calcularDataRetorno(dataVacinacao: string): string {
  // Bug 1 dia faltando por causa do fuso horário
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  const dataVacinacaoObj = new Date(dataVacinacao.replace(/-/g, "/"));
  dataVacinacaoObj.setDate(dataVacinacaoObj.getDate() + 30);
  // Locale pt-BR
  return dataVacinacaoObj.toLocaleDateString();
}

// Função para apagar uma vacinação do array de dados cadastrados
function apagarVacina(index: number): void {
  dadosCadastrados.splice(index, 1);
  // Formata os dados como HTML
  const dadosFormatados = dadosCadastrados.map(vacinacaoHTML).join("");
  // Atualiza o conteúdo no contêiner de dados cadastrados
  dadosCadastradosContainer.innerHTML = dadosFormatados;
}
// Função para formatar os dados da vacinação como HTML
function vacinacaoHTML(dados: Vacinacao, index: number): string {
  // Formatar a data no formato DD/MM/AAAA
  const dataFormatada = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };
  return `
    <div class="vacinacao-container">
      <div class="delete-button" onclick="apagarVacina(${index})">
        x
      </div>
      <div class="vacinacao-group">
        <strong>CPF:</strong> ${dados.cpf}<br />
        <strong>Nome:</strong> ${dados.nome}<br />
        <strong>Data de Nascimento:</strong> ${dataFormatada(
          dados.dataNascimento
        )}<br />
        <strong>Nome da Vacina:</strong> ${dados.nomeVacina}<br />
        <strong>Data de Vacinação:</strong> ${dataFormatada(
          dados.dataVacina
        )}<br />
        <strong>Data de Retorno:</strong> ${dados.dataRetorno}<br />
      </div>
    </div>
  `;
}

//Listener de evento para o formulário de cadastro
cadastroForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(cadastroForm);
  // Obtém o valor do CPF do formulário
  const cpfFormData = formData.get("cpf") as string;
  // Valida se o CPF possui 11 caracteres
  if (cpfFormData.length !== 14) {
    alert("CPF deve ter 11 caracteres.");
    return;
  }
  // Cria um objeto de Vacinação com os dados do formulário
  const dadosVacinacao: Vacinacao = {
    cpf: formData.get("cpf") as string,
    nome: formData.get("nome") as string,
    dataNascimento: formData.get("dataNascimento") as string,
    nomeVacina: formData.get("nomeVacina") as string,
    dataVacina: formData.get("dataVacina") as string,
    dataRetorno: calcularDataRetorno(formData.get("dataVacina") as string),
  };
  // Adiciona os dados da vacinação ao array de dados cadastrados
  dadosCadastrados.push(dadosVacinacao);
  // Formata os dados como HTML e os exibe no contêiner de dados cadastrados
  const dadosFormatados = dadosCadastrados.map(vacinacaoHTML).join("");
  dadosCadastradosContainer.innerHTML = dadosFormatados;
});

// Listener de evento para formatar o input do CPF
cpfInput.addEventListener("input", function () {
  let cpfFormatado = cpfInput.value.replace(/\D/g, "");
  cpfFormatado = cpfFormatado.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4"
  );
  // Atualiza o valor do CPF com o CPF formatado
  cpfInput.value = cpfFormatado;
});
