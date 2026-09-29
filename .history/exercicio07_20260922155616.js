const prompt = require('prompt-sync')();

function ordenarTresNumeros(arr) {
    if (arr[0] > arr[1]) {
        let aux = arr[0];
        arr[0] = arr[1];
        arr[1] = aux;
    }

    if (arr[1] > arr[2]) {
        let aux = arr[1];
        arr[1] = arr[2];
        arr[2] = aux;
    }

    if (arr[0] > arr[1]) {
        let aux = arr[0];
        arr[0] = arr[1];
        arr[1] = aux;
    }

    return arr;
}
let numeros = [];

numeros.push(Number(prompt("Insira o primeiro número:")));
numeros.push(Number(prompt("Insira o segundo número:")));
numeros.push(Number(prompt("Insira o terceiro número:")));

console.log("Lista definida: ", numeros);
