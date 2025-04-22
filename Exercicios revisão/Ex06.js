const prompt = require("prompt-sync")() 

let altura = Number(prompt)("Qual sua altura?:")
let sexo = Number(prompt("Qual seu sexp (M/F)"))
let M = (72.7 * altura) - 58
let F = (62.1 * altura) - 44.7
if (sexo =="M") {
    console.log(M);
}else if (sexo =="F"){
    console.log(F);
    
}else {
    console.log("Seu sexo é invalido");
    
}