arrayValor = []
function add() {
    var
        codigo = document.getElementById("codigo").value
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
            row = table.insertRow(rows-1)
            codec = row.insertCell(0)
            codec.innerHTML = codigo
            itemc = row.insertCell(1)
            itemc.innerHTML = item
            valorc = row.insertCell(2)
            valorc.innerHTML = valor
            quantidadec = row.insertCell(3)
            quantidadec.innerHTML = quantidade
            valorTotalUnc = row.insertCell(4)
            valorTotalUnc.innerHTML = valorTotalUn
            
        document.getElementById("codigo").value = ""
        document.getElementById("item").value = ""
        document.getElementById("valor").value = ""
        document.getElementById("quantidade").value = ""
    }
var valorTotal = valorTotal