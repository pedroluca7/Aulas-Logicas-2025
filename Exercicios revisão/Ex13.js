function verificarDesempenho(n1, n2, n3, n4) {
    let media = (n1 + n2 + n3 + n4) / 4;
    console.log(`Média: ${media.toFixed(2)}`);
  
    if (media >= 7) {
      console.log("Situação: Aprovado ✅");
    } else if (media >= 5) {
      console.log("Situação: Recuperação ⚠️");
    } else {
      console.log("Situação: Reprovado ❌");
    }
  }
  
  // Exemplo com entrada do usuário
  let nota1 = parseFloat(prompt("Digite a 1ª nota:"));
  let nota2 = parseFloat(prompt("Digite a 2ª nota:"));
  let nota3 = parseFloat(prompt("Digite a 3ª nota:"));
  let nota4 = parseFloat(prompt("Digite a 4ª nota:"));
  
  verificarDesempenho(nota1, nota2, nota3, nota4);
  