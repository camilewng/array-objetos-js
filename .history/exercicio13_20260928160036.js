let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas);

console.log(frutas[1]);

frutas.push("Morango");
console.log(frutas);

frutas.shift();
console.log(frutas);

let numeros = [8, 18, 28];

numeros.push(88);
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.unshift(53);
console.log(numeros);

numeros.shift();
console.log(numeros);

let frutas2 = ["Manga", "Abacaxi", "Melancia"];

let todasFrutas = frutas.concat(frutas2);
console.log(todasFrutas);

let primeirasFrutas= todasFrutas.slice(0, 2);
console.log(primeirasFrutas);

todasFrutas.splice(1, 1);
console.log(todasFrutas);

console.log(todasFrutas.indexOf("Banana"));

let frutasComM = frutas.filter(fruta => fruta.toLowerCase)
          