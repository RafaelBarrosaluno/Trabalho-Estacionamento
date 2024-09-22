function calcularpag() {
    // Recuperando valores dentro da função
    var nome = document.getElementById("nome").value;
    var placa = document.getElementById("placa").value;
    var carro = document.getElementById("carro").value;
    var date = document.getElementById("date").value;
    var valor = document.getElementById("valor").value;

    // Cálculo do valor bruto
    var bruto = parseFloat(valor) * parseInt(date);

    // Cálculo com desconto se necessário
    var total;
    if (bruto > 150) {
        total = bruto - (bruto * 0.10);
    } else {
        total = bruto;
    }

    // Exibindo as informações na tela
    alert(
        "Nome: " + nome +
        "\nPlaca: " + placa +
        "\nCarro: " + carro +
        "\nDias: " + date +
        "\nValor total a pagar: R$ " + total.toFixed(2)
    );
}

// Função para limpar os campos
function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("placa").value = "";
    document.getElementById("carro").value = "";
    document.getElementById("date").value = "";
    document.getElementById("valor").value = "";
}

// Função para sair da página
function sair() {
    window.location.href = "index.html"; // Ou pode ser outro redirecionamento
}
