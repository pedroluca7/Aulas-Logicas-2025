const prompt = require("prompt-sync")()

let ano = Number(prompt('Qual é o ano em que você nasceu?'))
let idade = 2025 - ano

if (idade < 18) {
    console.log('Você é menor de idade')
 } else {
   console.log('Você é maior de idade')
 }
