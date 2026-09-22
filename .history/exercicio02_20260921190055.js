let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numAtual = 5;

let maioresQue = numeros.filter(function(numAtual){

    if (numeros > numAtual){
        return true;
    } else {
        return false;
    }
});

console.log(maioresQue)