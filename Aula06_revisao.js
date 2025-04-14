const prompt = require('prompt-sync')();

//declarando variavel sem dados (underfined)
let nota;
//declarando variavel com informação
let nome="carlos";

//retrubuindo um valor a variavel nome
nome = "roberto";
nota = 8,5

//Entrada de dados do nosso programa

let sobrenome = prompt('Digete seu sobrenome: ');
let nota1 = Number (prompt('digite a nota da 1ª prova'));
let nota2 = Number (prompt('digite a nota da 2ª prova'));

//processamento dos dados
let media = (nota1 + nota2) / 2;
let nomeCompleto = nome+ ' ' + sobrenome;4
let nomeCompleto2 = `${nome} ${sobrenome}`;
let idade = prompt('digite sua idade: ');
let idadeNumero = parseInt(idade);

//saida dos dados
console.log('---relatorio final---');
console.log(nomeCompleto);
console.log(`o seu nome é:'${nomeCompleto}  \n sua idade ${idade}`);
console.log(' o seu nome é: '+ nomeCompleto + '\n sua idade'+ idade);
console.log(`sua media é:${media}`);

let n = 0; //0
n=0 + 1; //1
n = n +1;//2
n = n +1;//3
n+=1;    //4
n++;     //5
n += 3;  //8
n--;     //7
n = n - 1;//6
n -=2;   //4

//resolucao do exercicio de aula anterior
let horasPordia = 8;
let diasTrabalhados = 15;
let valorHora = 100;
let totalHoras = diasTrabalhados * horasPorDia;
let custoTotal = totalHoras * valorHora;
console.log(`o custo total é de R$ ${custoTotal}`);





