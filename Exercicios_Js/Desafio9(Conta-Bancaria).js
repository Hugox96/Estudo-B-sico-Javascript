// Class principal ContaBancaria com a nossa variavel principal saldoInicial
class ContaBancaria {
    constructor(saldoInicial) {
      // saldo é a variavel mais importante, a partir dela que vamos fazer a operação
      this.saldo = saldoInicial;
    }
  
    // metodo para realizar o deposito, nesse caso o valor é incrementado
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`);
    }
    //metodo para sacar o valor, nesse caso o valor é decrementado, já que estamos retirando parte do valor
    sacar(valor, msg) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de ${valor} realizado com sucesso: ${msg}`);
        console.log(`Novo saldo: ${this.saldo}`)
      } else {
        console.log(`Saldo insuficiente para realizar o saque de ${valor}. Saldo atual: ${this.saldo}`);
      }
    }
   // metodo para transferir o valor, nesse caso a logica de decrementador é mantida.
    transferir(destino, valor) {
      if (valor <= this.saldo) {
        this.sacar(valor);
        destino.depositar(valor);
        console.log(`Transferência de ${valor} realizada com sucesso para a conta de destino.`);
      } else {
        console.log(`Saldo insuficiente para realizar a transferência de ${valor}. Saldo atual: ${this.saldo}`);
      }
    }
}

// instanciando a classe contabancaria
const salario = new ContaBancaria(3000);
const destino = new ContaBancaria(1); // Criando uma conta de destino

// //depositando
salario.depositar(10);
salario.sacar(20, "comprei manga")
// salario.transferir(destino, 20); // Passando a conta de destino como argumento
