const prompt = require("prompt-sync")()

let nota1 = Number (prompt('Qual a 1ªnota?'));
let nota2 = Number (prompt('Qual a 2ª nota'));
let media = nota1 + nota2 / 2
if (media >= 7 ){
    console.log('Você passou de ano');
    
}else{
    console.log('Você não passou de ano');
    
}