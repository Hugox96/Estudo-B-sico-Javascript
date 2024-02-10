const readline = require('readline');

function lerOpcao() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Escolha uma opção: ', (opcao) => {
    rl.close();
    return opcao;
  });
}

// async function menu() {
//   const opcao = await lerOpcao();
//   console.log(`Opção escolhida: ${opcao}`);
// }

menu();
