function desconto(){
    var
    valor = document.getElementById("Desconto").value
    valor = Number(valor.replace(",","."))
    porcentagem = document.getElementById("Porcentagem")
    reais = document.getElementById("Reais")
    valorPor = 0
    resultado = 0
    if(Porcentagem.checked){
        resultado = valorTotal - (valorTotal*valor/100)
        valorPor = valorTotal*valor/100
    }else if (reais.checked){
        resultado = valorTotal - valor
        valorPor = valor/valorTotal*100+"%"
    }
    document.getElementById("valorTotal").value = resultado.toFixed(2)
    document.getElementById("ValDesconto").value = valorPor

}