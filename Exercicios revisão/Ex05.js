const prompt = require("prompt-sync")() 

let sexo = prompt("Qual o seu sexo (M/F)?")

if (sexo=="M"){
  tolosercase(console.log("masculino"));
}else if (sexo =="F"){
    tolosercase(console.log("feminino"));
}