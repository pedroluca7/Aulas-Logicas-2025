function calcularParcelas(valorDivida) {
    // Tabela de parcelas e seus respectivos juros
    const opcoesParcelas = [
      { parcelas: 1, jurosPercentual: 0 },
      { parcelas: 3, jurosPercentual: 10 },
      { parcelas: 6, jurosPercentual: 15 },
      { parcelas: 9, jurosPercentual: 20 },
      { parcelas: 12, jurosPercentual: 25 },
    ];
  
    console.log(`Dívida de R$ ${valorDivida.toFixed(2)}\n`);
    console.log("Parcelas\tJuros\t\tValor Parcela");
  
    opcoesParcelas.forEach(opcao => {
      const juros = valorDivida * (opcao.jurosPercentual / 100);
      const totalComJuros = valorDivida + juros;
      const valorParcela = totalComJuros / opcao.parcelas;
  
      console.log(`${opcao.parcelas}\t\tR$ ${juros.toFixed(2)}\t\tR$ ${valorParcela.toFixed(2)}`);
    });
  }
  
  // Exemplo de uso
  let valorDivida = parseFloat(prompt("Digite o valor da dívida:"));
  calcularParcelas(valorDivida);
console.log("Cálculo de parcelas concluído.");
  