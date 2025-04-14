//variaveis compostas / vetores / arrays

// variavel simples, cabe apenas 1 dado por vez
let fruta = 'Maçã';
fruta = 'Banana';

let frutas = ['Maçã', 'Banana', 'Abacaxi','Uva']

console.log(frutas);
console.log(frutas [1]);

//Declarando uma lista vazia
let listaVazia = [];

//Declaração de uma lista de números
let numeros = [1, 2, 8, 5, 9];

//Declaração de uma lista de strings
let nomes = ['Ana', 'João', 'Maria'];       

//Declaração de uma lista mista
let listaMista = [4, 'feijão', true, 7.55];

//Declaração de uma lista com outras listas
let listaDeVectores = [['Coca-cola', 'hot-dog'], [5.00, 10.00]]
console.log(listaDeVetores[0][1]);

console.log(frutas);
//Alterando o conteúdo de um item da lista
frutas[3] = 'Melancia';
console.log(frutas);

//Inserindo um novo item na lista
frutas.push ('Laranja')

frutas = [...frutas, 'Laranja']; //utilizando o operador spread

//inspirando um novo itens em posição 



frutas.splice(3, 1);
//  3 - posição
//  1 - quantidade de itens a serem removidos
fruta.shift()   
fruta.pop() 



