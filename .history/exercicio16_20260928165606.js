let contaBancaria = {
   titular: "Maria",
   saldo: 1000,

   depositar(valor){
    if (valor > 0){
            his.saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`);
        } else{
            console.log("O valor do depósito devr ser maior que zero.");
        }
   }
   
   
}