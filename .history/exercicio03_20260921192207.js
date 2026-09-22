let numeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let valor = 4;

function contarOcorrencias(numeros, valor){

        let listaFiltrada = numeros.filter (function(numAtual){

        if(numAtual === valor){
            return true;
        } else {
            return false;
        }
    });

    
}

