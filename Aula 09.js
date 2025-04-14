//Estruturas condicionais aninhadas
//switch case

const prompt = require("prompt-sync")()

let valorCompra = 120;
let clienteVip = true;

if (valorCompra >=100){
    if (clienteVip == true) {
      console.log(`Você ganhou R$ ${desconto} de desconto`);                    
      
        
    }

} else{
    let restante = valorCompra - 100;
    console.log(`Compra mais R$  ${restante} e ganhe desconto`);
    
}

let idade = Number(prompt('Qual é sua idade?'))
if (idade < 16) {
    console.log('Não pode votar')
} else{
    if (idade >=18 && idade <70) {
        console.log('Voto obrigatorio');
    }else{}

}


//switch case é uma alternativa ao if else

let n1= Number (prompt('Digite um nº: '));
let n2= Number (prompt('Digite outro nº: '));
let op= prompt('Digite o operador (+ - / * **): ');

switch (op) {

    case '+':
    console.log(n1 + n2);
    break;

    case '-':
    console.log(n1 - n2);
    break;

    case '/':
    console.log(n1 / n2);
    break;
    
    case '*':
    console.log(n1 * n2);
    break;
    
    
    
}