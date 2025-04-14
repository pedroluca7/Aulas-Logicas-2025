const prompt = require("prompt-sync")()

let km = Number(prompt('Qual é a sua velacidade?'))

if (km > 80 ) {
  let valor = (km - 80) * 7
  console.log(valor)
} else {
  console.log('Você não foi multado')
}