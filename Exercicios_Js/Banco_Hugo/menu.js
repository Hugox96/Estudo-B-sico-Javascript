const ContaBancaria = require('./ContaBancaria');
const readline = require('readline');

function exibirMenu() {
  console.log('--- Menu ---');
  console.log('1. Depositar');
  console.log('2. Sacar');
  console.log('3. Transferir');
  console.log('4. Sair');
}

function lerOpcao() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    rl.question('Escolha uma opção: ', (opcao) => {
      rl.close();
      resolve(opcao);
    });
  });
}


async function menu() {
  const conta = new ContaBancaria(1000); // Saldo inicial de 1000

  let opcao;
  do {
    exibirMenu()
    // lerOpcao();
    opcao = await lerOpcao();
    
    switch (opcao) {
      case '1':
        const valorDeposito = parseFloat(await lerOpcao());
        conta.depositar(valorDeposito);
        break;
      case '2':
        const valorSaque = parseFloat(await lerOpcao());
        conta.sacar(valorSaque);
        break;
      case '3':
        const valorTransferencia = parseFloat(await lerOpcao());
        const destinatario = await lerOpcao();
        // Implementar a transferência aqui
        break;
      case '4':
        console.log('Saindo...');
        break;
      default:
        console.log('Opção inválida.');
        break;
    }
  } while (opcao !== '4');
}

menu();

module.exports = menu;
