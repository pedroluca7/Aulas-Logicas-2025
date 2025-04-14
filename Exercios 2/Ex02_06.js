const prompt = require("prompt-sync")()

let numero = Number(prompt('Qual é o 1° número?'))
let numero2 = Number(prompt('Qual é o 2° número?'))

if (numero == numero2) {
    console.log(" Esses números São iguais")
} else {
    console.log(' Esses números não são iguais')
}