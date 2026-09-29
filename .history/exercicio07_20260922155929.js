const prompt = require('prompt-sync')();

let numeros = [];

numeros.push(Number(prompt("Insira o primeiro número:")));
numeros.push(Number(prompt("Insira o segundo número:")));
numeros.push(Number(prompt("Insira o terceiro número:")));

console.log("Lista definida: ", numeros);

numeros.reverse();
