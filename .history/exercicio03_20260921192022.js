let numeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let valor = 4;

let contarOcorrencias = numeros.filter (function(numeros, valor){

    if(numeros === valor){
        return true;
    } else {
        return false;
    }
});
