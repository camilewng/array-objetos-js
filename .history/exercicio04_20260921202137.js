let numero = 10;

function criarArray(numero){
    let array = [];

    for(let contador = 1; contador <= numero; contador++){
        array.push(contador);
    }

    return array;
}

console.log(criarArray(numero));
