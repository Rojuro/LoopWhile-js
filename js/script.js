let i =1
while (i <= 10) {
    console.log(i)
    i++
    document.getElementById("element")


}

// -- Exercicio 1 --- Progressão Aritmética-- -->
function calcProgArit() {
    // ENTRADA
    let inicio = Number(document.getElementById("inicio").value)
    let passo = Number(document.getElementById("passo").value)
    let repeticoes = Number(document.getElementById("repeticoes").value)

    // PROCESSAMENTO
    let soma = 0
    for(let i = inicio; i < repeticoes; i++)
    {
        soma += passo
        // SAÍDA
        document.getElementById("progArit").innerHTML += `<p>${soma}</p>`
    }
}