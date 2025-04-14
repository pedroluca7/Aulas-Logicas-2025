const prompt = require("prompt-sync")()

let filmes = [
    'A vida secretas dos animais'
    , 'O poderoso chefão'
    , 'O senhor dos anéis'
    , 'Carros 3 '
    , 'O poderoso chefão 2 '
    , 'O poderoso chefão 3 '
    , 'Carros 4'
    ]
    console.log((filmes[0]));

    console.log(filmes[4]);

    filmes[6] = 'Avatar 2'
console.log(filmes);
 
filmes.push('Peppa pig');
console.log(filmes);
filmes = [...filmes, 'Shrek']
console.log(filmes);
filmes.splice(5, 0, 'Toy Story')
console.log(filmes);
filmes.shift()

    
    
    
