// Obtém referência no DOM
var cpfInput = document.getElementById("cpf");
var cadastroForm = document.getElementById("cadastroForm");
var dadosCadastradosContainer = document.getElementById("dadosCadastrados");
// Array para guardar os dados das vacinações cadastradas
var dadosCadastrados = [];
// Função para calcular a data de retorno, 30 dias após a data da vacinação
function calcularDataRetorno(dataVacinacao) {
    // Bug 1 dia faltando por causa do fuso horário
    // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
    var dataVacinacaoObj = new Date(dataVacinacao.replace(/-/g, "/"));
    dataVacinacaoObj.setDate(dataVacinacaoObj.getDate() + 30);
    // Locale pt-BR
    return dataVacinacaoObj.toLocaleDateString();
}
// Função para apagar uma vacinação do array de dados cadastrados
function apagarVacina(index) {
    dadosCadastrados.splice(index, 1);
    // Formata os dados como HTML
    var dadosFormatados = dadosCadastrados.map(vacinacaoHTML).join("");
    // Atualiza o conteúdo no contêiner de dados cadastrados
    dadosCadastradosContainer.innerHTML = dadosFormatados;
}
// Função para formatar os dados da vacinação como HTML
function vacinacaoHTML(dados, index) {
    // Formatar a data no formato DD/MM/AAAA
    var dataFormatada = function (dateString) {
        var _a = dateString.split("-"), year = _a[0], month = _a[1], day = _a[2];
        return "".concat(day, "/").concat(month, "/").concat(year);
    };
    return "\n    <div class=\"vacinacao-container\">\n      <div class=\"delete-button\" onclick=\"apagarVacina(".concat(index, ")\">\n        x\n      </div>\n      <div class=\"vacinacao-group\">\n        <strong>CPF:</strong> ").concat(dados.cpf, "<br />\n        <strong>Nome:</strong> ").concat(dados.nome, "<br />\n        <strong>Data de Nascimento:</strong> ").concat(dataFormatada(dados.dataNascimento), "<br />\n        <strong>Nome da Vacina:</strong> ").concat(dados.nomeVacina, "<br />\n        <strong>Data de Vacina\u00E7\u00E3o:</strong> ").concat(dataFormatada(dados.dataVacina), "<br />\n        <strong>Data de Retorno:</strong> ").concat(dados.dataRetorno, "<br />\n      </div>\n    </div>\n  ");
}
//Listener de evento para o formulário de cadastro
cadastroForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(cadastroForm);
    // Obtém o valor do CPF do formulário
    var cpfFormData = formData.get("cpf");
    // Valida se o CPF possui 11 caracteres
    if (cpfFormData.length !== 14) {
        alert("CPF deve ter 11 caracteres.");
        return;
    }
    // Cria um objeto de Vacinação com os dados do formulário
    var dadosVacinacao = {
        cpf: formData.get("cpf"),
        nome: formData.get("nome"),
        dataNascimento: formData.get("dataNascimento"),
        nomeVacina: formData.get("nomeVacina"),
        dataVacina: formData.get("dataVacina"),
        dataRetorno: calcularDataRetorno(formData.get("dataVacina")),
    };
    // Adiciona os dados da vacinação ao array de dados cadastrados
    dadosCadastrados.push(dadosVacinacao);
    // Formata os dados como HTML e os exibe no contêiner de dados cadastrados
    var dadosFormatados = dadosCadastrados.map(vacinacaoHTML).join("");
    dadosCadastradosContainer.innerHTML = dadosFormatados;
});
// Listener de evento para formatar o input do CPF
cpfInput.addEventListener("input", function () {
    var cpfFormatado = cpfInput.value.replace(/\D/g, "");
    cpfFormatado = cpfFormatado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    // Atualiza o valor do CPF com o CPF formatado
    cpfInput.value = cpfFormatado;
});
