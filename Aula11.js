const prompt = require("prompt-sync")()


//inicialização da variável ; condição do for; incremento de variável
for (let contador = 1; contador <= 5; contador++ ) {
       console.log(contador);
       


}
//Neste for iniciamos a partir do número 5, até nº 50
//incrementando de 3 em 3 no contador
for (let contador = 5; contador <= 50; contador+= 3 ) {
    console.log(contador);
    

}

console.log('Entregando os notebooks');
for (let nr = 1; nr <= 32; nr++){
    let nome = prompt(`Quem é o nº ${nr}: `)
    let presente = prompt (`O(A) ${nome} está presente (S ou N)?`)

    if (presente == 'S'){
        console.log(`Pegar o notebook ${nr}`);
        console.log(`Levar o notebook até o (a ${nome})`);

    }else{
        console.log(`Não pegar o notebook`);
        
    }
}


let nr = 6;
for (let contador = 1; contador <= 10; contador++){
    console.log(`${nr} x ${contador} = ${nr * cortador}`);
    
}

