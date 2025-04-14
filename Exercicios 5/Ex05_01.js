const prompt = require("prompt-sync")() 

let countImpares = 0;

while (countImpares < 40) {
  for (let i = 1; i <= 40; i++) {
    if (i % 2 != 0) {
        countImpares++;
        console.log(i);
        }
        }
        }