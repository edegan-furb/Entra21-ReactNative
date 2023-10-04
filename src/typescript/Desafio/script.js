// Referências de elemento
var cpf = document.getElementById("cpf");
var form = document.getElementById("cadastroForm");
var dadosCadastradosDiv = document.getElementById("dadosCadastrados");
// Array onde os dados vão ser salvos
var dadosCadastrados = [];
//  Calcular a nova data de retorno 30 dias após a data atual
//  Pensei que fosse calcular a nova data de retorno 30 dias após a data de vacinação
/*
  function calcularDataRetorno(dataVacinacao: string): string {
    const dataVacinacaoObj = new Date(dataVacinacao);
    dataVacinacaoObj.setDate(dataVacinacaoObj.getDate() + 30);
   return dataVacinacaoObj.toLocaleDateString();
  }
*/
function calcularDataRetorno() {
    var dataVacinacaoObj = new Date();
    dataVacinacaoObj.setDate(dataVacinacaoObj.getDate() + 30);
    return dataVacinacaoObj.toLocaleDateString();
}
// Apagar dado por index do array
function apagarVacina(index) {
    dadosCadastrados.splice(index, 1);
    var dadosFormatados = dadosCadastrados.map(vacinaHTML).join("");
    dadosCadastradosDiv.innerHTML = dadosFormatados;
}
// Como os dados vão ser organizados no HTML
function vacinaHTML(dados, index) {
    // Formatar data
    var dataFormatada = function (dateString) {
        var _a = dateString.split("-"), year = _a[0], month = _a[1], day = _a[2];
        return "".concat(day, "/").concat(month, "/").concat(year);
    };
    return "\n  <div class=\"vacina-container\">\n    <div class=\"delete-button\" onclick=\"apagarVacina(".concat(index, ")\">\n      x\n    </div>\n    <div class=\"vacina-group\">\n    <strong>CPF:</strong> ").concat(dados.cpf, "<br />\n    <strong>Nome:</strong> ").concat(dados.nome, "<br />\n    <strong>Data de Nascimento:</strong> ").concat(dataFormatada(dados.dataNascimento), "<br />\n    <strong>Nome da Vacina:</strong> ").concat(dados.nomeVacina, "<br />\n    <strong>Data de Vacina\u00E7\u00E3o:</strong> ").concat(dataFormatada(dados.dataVacina), "<br />\n        <strong>Data de Retorno:</strong> ").concat(dados.returnData, "<br />\n      </div>\n    </div>\n  ");
}
// Submit Event
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(form);
    // Pega CPF
    var cpf = formData.get("cpf");
    // Alerts
    if (cpf.length !== 14) {
        alert("CPF deve ter 11 caracteres.");
        return;
    }
    // Informar valores
    var formObject = {
        cpf: formData.get("cpf"),
        nome: formData.get("nome"),
        dataNascimento: formData.get("dataNascimento"),
        nomeVacina: formData.get("nomeVacina"),
        dataVacina: formData.get("dataVacina"),
        returnData: calcularDataRetorno(),
    };
    // Insere os dados no array
    dadosCadastrados.push(formObject);
    // Formata dados do array como VacinaHTLM
    var dadosFormatados = dadosCadastrados.map(vacinaHTML).join("");
    // Manda para a Div
    dadosCadastradosDiv.innerHTML = dadosFormatados;
});
// Formatar CPF
cpf.addEventListener("input", function () {
    var cpfFormatado = cpf.value.replace(/\D/g, "");
    cpfFormatado = cpfFormatado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    cpf.value = cpfFormatado;
});
