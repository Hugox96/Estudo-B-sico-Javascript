// Class principal ContaBancaria com a nossa variavel principal saldoInicial
class ContaBancaria {
    constructor(saldoInicial) {
      this.saldo = saldoInicial;
    }
  
    // metodo para realizar o deposito, nesse caso o valor é incrementado
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`);
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`);
      } else {
        console.log(`Saldo insuficiente para realizar o saque de ${valor}. Saldo atual: ${this.saldo}`);
      }
    }
  
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

const salario = new ContaBancaria(2000);
const destino = new ContaBancaria(0); // Criando uma conta de destino

//depositando
salario.depositar(10);
salario.transferir(destino, 20); // Passando a conta de destino como argumento
