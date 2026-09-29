let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas);

console.log(frutas[1]);

frutas.push("Morango");
console.log(frutas);

frutas.shift();
console.log(frutas);



let frutas2 = ["Manga", "Abacaxi", "Melancia"];

let todasFrutas = frutas.concat(frutas2);
console.log(todasFrutas);

let primeirasFrutas= todasFrutas.slice(0, 2);
console.log(primeirasFrutas);

todasFrutas.splice(1, 1);
console.log(todasFrutas);

console.log(todasFrutas.indexOf("Banana"));

let frutasComM = todasFrutas.filter(fruta => fruta.toLowerCase().startsWith('m'));
console.log(frutasComM);
          