const prompt = require("prompt-sync")()

let nmr1 = Number(prompt('qual o numero?'))
if(nmr1 >=0) {
    console.log('é um numero positivo')
}else{
    console.log('é um numero negativo')
}