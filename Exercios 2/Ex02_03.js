const prompt = require("prompt-sync")()

let numero = Number(prompt('Qual o numero?'))
if (numero % 2 == 0) {
    console.log('O numero e par')
} else
{
console.log('O numero e impar')
}