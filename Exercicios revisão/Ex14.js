function converterParaCentimetros(metros) {
    return metros * 100;
  }
  
  // Exemplo com entrada do usuário
  let metros = parseFloat(prompt("Digite a medida em metros:"));
  let centimetros = converterParaCentimetros(metros);
  
  console.log(`${metros} metro(s) equivalem a ${centimetros} centímetro(s).`);
console.log("Conversão realizada com sucesso!");  