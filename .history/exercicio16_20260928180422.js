let contaBancaria = {
   titular: "Maria",
   saldo: 1000,

   depositar(valor){
        if (valor > 0){
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`);
        } else{
            console.log("O valor do depósito devr ser maior que zero.");
        }
   },

   sacar(valor){
        if (valor > this.saldo){
            console.log("Saldo insuficiente para realizar o saque.");
        } else if (valor <= 0){
            console.log("O valor do saque deve ser maior que zero.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado. Saldo restante R$ ${this.saldo}`);
        }
   },

   versaldo(){
    console.log(`Titula`)
   }


   
   
}