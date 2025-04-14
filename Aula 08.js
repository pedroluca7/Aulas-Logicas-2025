//estrutura condicional composta e encadeada
//Operadores lógicos
// && - e
// || - ou
// ! - Não


let a = 2;
let b = 3;
let c = 5;
console.log(a > 2 && b < 2); // false pq 2 condição é F
console.log(a > 1 && b < 2); // false pq apenas 1 condição é v
console.log(a > 1 && b < 4); // true pq condição é v
console.log(a > 1 && b < 4 && c > 4);//True todas condição
console.log(a > 1 && b < 4 && c > 5);//false

console.log(a > 2 || b < 2);
console.log(a > 1 || b < 2);
console.log(a > 1 || b < 4); 
console.log(a > 1 || b < 4 && c > 4);
console.log(a > 1 || b < 4 && c > 5);

let altura = Number (prompt ('Digite sua altura'))
let peso = Number (prompt ('Digite seu peso'))

if (imc <18.5) {
    console.log('Você está abaixo do peso ideal');
} else if (imc > 18.5 & imc < 24.5) {
    console.log('Você está no peso ideal');
    
}else if (imc  >=18.5 && imc <25){

}

let lado1 = (prompt('Digite seu lado1'));
let lado2 = (prompt('Digite o lado2'));
let lado3 = (prompt('Digite o lado 3'));

if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1 ){
    console.log('Seu triangulo é um equilatero?');
}else if (lado1 != lado2 && lado2!= lado3 && lado1 != lado3){
    console.log('Seu Triangulo é um escaleno');

} else {
    console.log('Seu triangulo é um isósceles');
    
}







    


