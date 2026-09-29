function criarMatriz(linhas, colunas){
    let matriz = [];

    for(let i = 0; i < linhas; i++){
        let linha = [];

        for (let j = 0; j < colunas; j++){
            let numero = Math.floor(Math.random() * 100) + 1;
            linha.push(numero);
        }

        matriz.push(linha);
    }

    return matriz;
}

let matrizCompleta = criarMatriz(, 10);
console.log(matrizCompleta);