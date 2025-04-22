let A = [];


for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
  A.push(numero);
}

console.log("Números elevados ao quadrado:");
for (let i = 0; i < A.length; i++) {
  console.log(`${A[i]}² = ${A[i] ** 2}`);
}
