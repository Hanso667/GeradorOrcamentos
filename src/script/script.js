arrayValor = []
function botao() {
    var
        item = document.getElementById("item").value
    valor = Number(document.getElementById("valor").value)
    quantidade = Number(document.getElementById("quantidade").value)
    valorTotal = 0
    valorTotalUn = valor * quantidade

    arrayValor.push(valorTotalUn)

    for (let i in arrayValor) {
        valorTotal += arrayValor.at(i);
    }
    var
        table = document.getElementById("table")
    rows = table.rows.length
    row = table.insertRow(rows)
    itemc = row.insertCell(0)
    itemc.innerHTML = item
    valorc = row.insertCell(1)
    valorc.innerHTML = valor
    quantidadec = row.insertCell(2)
    quantidadec.innerHTML = quantidade
    valorTotalUnc = row.insertCell(3)
    valorTotalUnc.innerHTML = valorTotalUn
    document.getElementById("valorTotal").value = valorTotal
    document.getElementById("item").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("quantidade").value = ""

}