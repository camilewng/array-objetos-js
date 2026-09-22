let numeros = [1, 2, 3, 4, 5];

let soma = numeros.reduce(function(total, numero){

    return total + numero
}, 0);

function calcMedia (soma, numeros){

    const quantidade = numeros.length;
    const media = soma / quantidade;

    return media;
}

console.log(`A média é: ${calcMedia(media)}`);
