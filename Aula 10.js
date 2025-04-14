//estrutura de laço de repetição while
const prompt = require('prompt-sync')();
 
let resposta = 'S';


if (resposta == 'S'){
    console.log('Você está dentro do bloco');

    
}

console.log('FIM');

let senhaSecreta = 'SENAI'
let senhaDigitada
while(senhaSecreta != senhaDigitada){
    console.log('Descubra a senha secreta');
    senhaDigitada = prompt('Qual é senha?')

}

    console.log('FIM');

    //Exemplo 3 - Executando um número determinado de vezes
    let contador = 1;
    while (contador <=5) {
        console.log(`o contador está no nº ${contador}`)

        contador++; //contador = contador +;
    }
    
     //exemplo 4
     //posso deixar meu laço executando sem uma condição esepcifica, apenas
     //com hile (true) e encerrar o loop com o comando break
     let total = 0;
     let qtde = 0 ;

     while (true) {
        let valor =Number(prompt('Digite o valor do produto (0 para encerrar):'));

        if (valor ==0){
            break;
        } else {
            total = valor + total;
            qtde++;
        }
     }

    console.log(`Você comprou no total ${qtde}produtox`);
    console.log(`Valor total de compras R$ ${total.toFixed(2)}`)

    

    




