let idades = [5, 14, 18, 23, 32, 75];

let maiorIdade = idades.every(function(idade){
    return idade > 18;
});

console.log(maiorIdade);