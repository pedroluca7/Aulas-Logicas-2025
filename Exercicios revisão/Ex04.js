const prompt = require("prompt-sync")() 

let hora=Number(prompt("quantas horas trabalhadas no mes?"))
let salario =Number(prompt("qual o salario"))

let salarioHora = salario / hora 
console.log(`todo o salario do mês é ${salarioHora}`);
