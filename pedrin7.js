const prompt = require("prompt-sync")()


let senhaSecreta = 'luizcalvo'
let senhaDigitada
while(senhaSecreta != senhaDigitada){
    console.log('Senha incorreta'); 
    senhaDigitada = prompt('Qual é senha?')

}
    
