function calcularpag() {
    var nome = document.getElementById("nome").value;
    var placa = document.getElementById("placa").value;
    var carro = document.getElementById("carro").value;
    var date = document.getElementById("date").value;
    var valor = document.getElementById("valor").value;

    var bruto = parsefloat(valor)*parseInt(date);
}
if (bruto > 150){
        var total = bruto - (bruto * 0.10);
    }else{
        var total = bruto;
        alert("Total "+total);
    }
