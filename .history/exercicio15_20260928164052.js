let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020

    getIdade: function(){
        let anoAtual = new Date.getFullYear();
        return anoAtual - this.ano;
    },

    get
};

console.log(carro.marca);

carro['ano'] = 2025;