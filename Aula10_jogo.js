const prompt = require("prompt-sync")()

console.log('========================');
console.log('   JOGO DE ADIVINHA👺☯     ');
console.log('========================');

let nrSecreto = Math.floor(Math.random() * 1000) +1;
let acertou = false;
let tentativas = 0;

while (acertou == false){
      let chute = Number(prompt('Digite um nº entre 1 e 1000: '));
      tentativas++; //tentativas = tentativas + 1;
       if (chute == nrSecreto) {
           console.log(`Parabéns magnata,tá raul em bigode🤑 vc acertou em ${tentativas} tentativas`);
           acertou = true;
        } else if (chute > nrSecreto){
           console.log(`Você chutou ${chute}, tente um número⬇`);
        }else if (chute < nrSecreto) {
            console.log(`Você chutou ${chute}, tente um número⬆`);
        }
                     
    
}
console.log('bigode dos + bigode😎🥇');

