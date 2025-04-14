function Linha() {
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
}

Linha();
console.log('SESI/SENAI');
Linha();

function Cabecalho () {
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
    console.log('SESI/SENAI');
    console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
}
Cabecalho();

//função com parametro e sem retorno
function CabecalhoEscola(nomeEscola){
    Linha();
    console.log(nomeEscola);
    Linha();
    
}

CabecalhoEscola('USP');
CabecalhoEscola('SESI');

function Soma (nr1, nr2){
    let resultado = nr1 + nr2;
    console.log(resultado);
    
}

Soma (5, 8);
Soma(1232312, 90094975)

//Função com parametros e retorno
function Media (n1, n2){
    let resultado = (n1 + n2) / 2;
    return resultado;

}

let valor =  Media(5, 8);

