function criarMatriz(linhas, colunas){
    let matriz = [];

    for(let i = 0, < linhas; i++){
        let linha = [];

        for (let j = 0; j < colunas; j++){
            let numero = Math.floor(Math.random() * 100) + 1;
            linhas.push(numero);
        }

        matriz.push(linha);
    }

    return matriz;
}

let matrizCompleta = criarMatriz(3, 3);
console.log(matrizCompleta)