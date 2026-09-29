let pessoa = {
    nome: "Julia",
    anoNascimento: 2005,

    apresentar(){
        let idade = 2025 - this.anoNascimento;   
        `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`
    }
};

console.log(pessoa.apresentar());

