let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numAtual = 5;

let maioresQue = numeros.filter(function(numeros, num){

    if (numeros > num){
        return maioresQue;
    } else {
        console.log("Não há números maiores que este na lista.")
    }
});