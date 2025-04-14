const prompt = require("prompt-sync")()
let preço = Number(prompt("Qual o preço do produto?"))
let desconto = Number(prompt("Qual o valor do desconto?"))
let valorfinal_ = preço * 100
valorfinal_ = valorfinal_ / desconto
console.log (`O valor final com o desconto é ${valorfinal_}`)