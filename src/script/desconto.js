function desconto(){
    var
    valor = Number(document.getElementById("Desconto").value)
    porcentagem = document.getElementById("Porcentagem")
    reais = document.getElementById("Reais")
    if(Porcentagem.checked){
        valorTotal = valorTotal - (valorTotal*valor/100)
    }else if (reais.checked){
        valorTotal = valorTotal - valor
    }
    document.getElementById("valorTotal").value = valorTotal

}