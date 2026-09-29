let frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas[1]);

frutas.push("Manga");
console.log(frutas);

frutas.shift();
console.log(frutas);

console.log(frutas.length);

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);

}

frutas.forEach(function(frutas){
    console.log(frutas);
});

let tamanhoFruta = frutas.map(function(fruta){
    return frutas.length
})
