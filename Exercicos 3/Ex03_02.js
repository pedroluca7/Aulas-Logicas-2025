const prompt = require("prompt-sync")()

let idade = Number(prompt("Qual é sua idade?'"))

if (idade < 11 && 17) {
    console.log('Você é Adolescente');
 }

if (idade < 10) {
    console.log('Você é criança');
    
}

if (idade > 18 && 59) { 
    console.log('Você é adulto');
    
}

if (idade > 60){
    console.log('Você é idoso');
    
}
    
