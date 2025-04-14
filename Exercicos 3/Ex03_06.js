const prompt = require("prompt-sync")()

let salario = Number(prompt('Qual é o salário do funcionário?'))


if (salario <= 2000) {
    let desconto = (salario / 100) * 12
    console.log(`O reajuste será de R${desconto + salario} reais`)
} else if ( salario > 2000 || salario < 4000){
    let desconto1 =  (salario / 100) * 10
    console.log(`O valor de reajuste será de R$ ${desconto1 + salario} reais.`)
} else if (salario > 4000 ){
    desconto2 = (salario / 100) * 8
    console.log(`O valor de reajuste será de R$ ${desconto2 + salario} reais.`)
}   