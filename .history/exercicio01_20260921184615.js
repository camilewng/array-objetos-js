let numeros = [1, 2, 3, 4, 5];

function calcMedia (numeros){

let soma = numeros.reduce(function(total, numero){

    return total + numero
}, 0);



    const quantidade = numeros.length;
    const media = soma / quantidade;

    return media;
}

console.log(`A média é: ${calcMedia(soma, numeros)}`);
