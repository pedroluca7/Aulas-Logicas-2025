//criando nossa primeira variavel 
// uma variavel serve para armazenar uma informação/valor
// o memoria crie um espaço com o nome curso e guarde o valor 'Desenvolvimentos e sistemas'
var curso = 'Desenvolvimento de Sistemas'
//Exibindo o conteudo da variavel 
console.log('curso');//Para imprimir uma variavel,não se coloca entre ''
console.log(curso);
console.log('curso',curso);

//criando e atribuindo valores e uma variavel 
var idade=15; //inteira //integer
var temperatura =24.5;//real//float
var nome = 'Pedro luca';//string

console.log('Ola', nome,'Voce tem',idade,'anos')
console.log('esta cursando ',curso, ' hoje faz ',temperatura, 'ºC');

console.log('Ola', nome,'Voce tem',idade,'anos')
console.log('esta cursando ',curso, ' hoje faz ',temperatura, 'ºC');

//template string
//utilizo a crase ``para criar uma string
//para colocar variaveis dentro da string , utilizo ${variavel}
console.log(`ola,${nome} vc tem ${idade}, anos esta cursando ${curso} Hoje faz ${temperatura}ºC`)

//declarando uma variavel logica/boolean/boleano (true/false)

var podeDirigir =true
var estachovendo =false

//declarando uma variavel nula
var escola 

vartrue ="var"

//exercicio 
//nota1 valido
//nomecompleto valido
//nome completo invalido
//Média invalido 
//console valido
//_salario valido
//9dade invalido
//Minha_variael valido
//var valido
//valor$ invalido
//nome-completo invalido
//escola_ invalido
//telefone valido
//true valido

let cidade ='Andradina'
var turma = '2º'
const ano = 2025

console.log(turma);
turma = '3ºB'
console.log(turma); 
ano = 2026;

let_nome=Pedro
let_idade=36
let_peso=80

//no prompt o computador espera o usuario dgitar uma informação
//sempre quando recebemos uma informação de entrada ela vem em string

console.log(_nome,_idade,_peso);
_nome = prompt('Qual é o nome ?');                   //string
_idade = prompt('Qual é a idade?');                  //string
_peso = prompt('Qual é o peso?');                    //string 
console.log(_nome,_idade,_peso);

console.log(typeof _nome,typeof _idade,typeof _peso);

// Criam 2 variaveis num1 e num2 e recebam as informações pelo prompt

let num1 = prompt ('digite o primeiro nº:')
let num2 = prompt ('digite o segundo 2º:')
console.log(num1 + num2);

num1 = Number(num1);                    //string
console.log(typeof num1);               //convertendo a variavel do tipo string para number
console.log(typeof num1);               //number


//receber uma informação  já convertendo seu tipo de dados
let nº1 = Number(prompt('Digete o primeiro nº:'));  //Number
let nº2 = Number(prompt('Digete o segundo nº'))     //Number
console.log(nr1 + nr2);

//convertendo os dados de uma variavel
nr1 = '100.14';            //string
nr1 = Number('100.14')      //convertando string para number
nr1 = parseInt ('100.14')   //convertendo string para integer
nr1 = parseFloat('100');    //convertendo number para floart
nr1 = String(100.14);       //convertendo um number para string

_nome = prompt('Qual é o nome ?');                   
_idade = parseInt(prompt('Qual é a idade?'));                  
_peso = parseFloat(prompt('Qual é o peso?'));                  
console.log(_nome,_idade,_peso);
