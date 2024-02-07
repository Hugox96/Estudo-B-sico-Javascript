class ContaBancaria {
    constructor(saldoInicial){
        this.saldo = saldoInicial
    }

depositar(valor){
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`);
}

sacar(valor){
    if (valor <= this.saldo){
        this.saldo -= valor;
        console.log(`Saque de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`);
    }
    else {console.log(`Saldo insuficiente para realizar o saque de ${valor}. Saldo atual: ${this.saldo}`);
}}} 

const salario = new ContaBancaria(2000)
console.log(salario)

// depositando
salario.depositar(100)

for (let i = 0; i <= 5; i++){
    salario.depositar(i)
}



