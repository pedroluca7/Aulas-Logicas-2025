function intervalo(n1, n2) {
    if (n1 < n2) {
      for (let i = n1 + 1; i < n2; i++) {
        console.log(i);
      }
    } else if (n2 < n1) {
      for (let i = n2 + 1; i < n1; i++) {
        console.log(i);
      }
    } else {
      console.log("Não há intervalo: os números são iguais.");
    }
  }
  