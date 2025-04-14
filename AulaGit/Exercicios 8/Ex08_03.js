function FormatarData(dia, mes, ano){
    let dataFormatada =`${dia}/${mes}/${ano}`;
    return dataFormatada;
}

let data = FormatarData(20, 6, 2009)
console.log(data);
console.log(FormatarData(14, 4, 2025));

