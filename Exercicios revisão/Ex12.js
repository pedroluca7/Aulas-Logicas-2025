let numeros = [];
let PARES = [];
let IMPARES = [];

for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
  numeros.push(numero);

  if (numero % 2 === 0) {
    PARES.push(numero);
  } else {
    IMPARES.push(numero);
  }
}

console.log("Vetor de números pares:", PARES);
console.log("Vetor de números ímpares:", IMPARES);




































































