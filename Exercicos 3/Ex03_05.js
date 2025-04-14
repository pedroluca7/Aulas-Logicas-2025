const prompt = require("prompt-sync")()

let nt1 = Number(prompt('Me fala a 1ª nota'))
let nt2 = Number(prompt('Me fala a 2ª nota'))
let media = (nt1 + nt2) / 2

    if (media >= 7) {
        console.log('Aprovado')
        } else {
            console.log('Reprovado')
            }
            
