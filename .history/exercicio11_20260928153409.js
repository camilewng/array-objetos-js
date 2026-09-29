let numeros = [7, 19, 18, 28, 36];
console.log(numeros);

let numerosJoin = numeros.join(", ");
console.log(numerosJoin);

let numerosReverse = numeros.reverse();
console.log(numerosReverse);

let numerosSlice = numeros.slice(0, 2);
console.log(numerosSlice);

let numerosPares = numeros.filter(function(numero){
    return numero % 2 === 0;
});
console.log(numerosPares);

let numerosQuadrado = numeros.map(function(numero){
    return numero * numero;
})
console.log(numerosQuadrado);

let somaNumeros = numeros.reduce(function(total, numero){
    return total + numero;
}, 0)