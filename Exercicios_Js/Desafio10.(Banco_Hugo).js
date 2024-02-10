// Importa a classe ContaBancaria
const ContaBancaria = require('./ContaBancaria');

// Função para exibir o menu
function exibirMenu() {
  console.log('--- Menu ---');
  console.log('1. Depositar');
  console.log('2. Sacar');
  console.log('3. Transferir');
  console.log('4. Sair');
}

// Função para ler a opção do usuário
function lerOpcao() {
  return new Promise((resolve, reject) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question('Escolha uma opção: ', (opcao) => {
      readline.close();
      resolve(opcao);
    });
  });
}

// Função principal do menu
async function menu() {
  const conta = new ContaBancaria(1000); // Saldo inicial de 1000

  let opcao;
  do {
    exibirMenu();
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

// Executa o menu
menu();

// Exporta a função menu caso seja necessário usar em outros arquivos
module.exports = menu;
