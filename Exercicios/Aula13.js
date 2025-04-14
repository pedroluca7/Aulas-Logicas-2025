const prompt = require("prompt-sync")()
//interação sobre nossos vetores (arrays/listas)

let frutas = ['Maça','Banana','Abacaxi','Uva'];
//para interar sobre um vetor, utilizamos o for
for (let x = 0; x < frutas.length; x++) {
         console.log(`A fruta da posição ${x} é ${frutas [x]}`);
         
}
console.log('FIM');

//interando sobre uma lista usando o for of
let listaJogadores = ['Pelé','Maradona','Messi','Ronaldo7']
for (let jogador of listaJogadores) {
    console.log(`O jogador é ${jogador}`);
    
}
let ListaNumeros = ['1','2','3','4','5','6','7'];
let soma=0;
for (let numero of ListaNumeros){
    console.log(`o numero é ${numero}`);
    soma = numero + soma;
}
console.log(soma);
//vereficando se um elemeno existe em array
let vogais = ['a', 'e', 'i','o', 'u'];
let consoantes = ['b', 'c', 'd', 'f', 'g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
let letraParaVereficar = prompt('Digite uma letra: ');
if (vogais.includes(letraParaVereficar.toLowerCase())) {
    console.log(`A letra ${letraParaVereficar} é uma vogal`);

} if (vogais.includes(letraParaVereficar.toUpperCase())) {
    console.log(`A letra ${letraParaVereficar} não é uma vogal`);
    
} else if (consoantes.includes(letraParaVereficar.toLowerCase())){
    console.log(`A letra ${letraParaVereficar} é uma consoante`);

} else if (ListaNumeros.includes(letraParaVereficar)){
    console.log(`${letraParaVereficar} é um numero`);
    
} else {
    console.log(`${letraParaVereficar} não é uma letra nem número`);
    
}
//posicição           0        1          2        3 
let listasFrutas = ['Maça', 'Banana', 'Abacaxi', 'Uva'];
for (const [pos,fruta] of listasFrutas.entries()) {
    console.log(`A fruta da posição ${pos} é ${fruta}`);
    
}
//Separando uma string utilizando o split()
let produtos = 'Celular,Notebook,Tv,Tablet,Monitor'
let listaProdutos = produtos.split(',');
console.log(produtos);
console.log(listaProdutos);

//             01234
let escola = 'SENAI';
console.log(escola[0]); //S


