const prompt = require("prompt-sync")()

let valor = Number(prompt('Quanto que o vendedor vendeu no mês?'));

if (valor > 5000) {
    let comissao = (numero / 100) * 5
    console.log(comissao)
} else {
    let comissao2 = (numero /100) * 3
    console.log( comissao2)
}
