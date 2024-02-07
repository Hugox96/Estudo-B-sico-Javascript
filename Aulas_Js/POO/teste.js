// // Em JavaScript, objetos são estruturas de dados chave-valor, onde as chaves 
// (também chamadas de propriedades) são strings ou símbolos, 
// e os valores podem ser de qualquer tipo, incluindo strings, números, booleanos, funções, 
// arrays e até mesmo outros objetos.
// // No seu caso, cada elemento no array passos é um objeto com duas propriedades: 
// descricao e equacao. Essa estrutura é bastante flexível e é 
// frequentemente usada para representar dados estruturados.

// Funcinou
const math = require('mathjs');

function calcularDerivada(funcao) {
  let passos = [];

  // Passo 1: Identificar a função
  passos.push({ descricao: 'Passo 1: Identifique a função:', equacao: `f(x) = ${funcao}` });

  // Passo 2: Calcular a derivada
  let derivada = math.derivative(funcao, 'x').toString();
  passos.push({ descricao: 'Passo 2: Calcular a derivada:', equacao: `f'(x) = ${derivada}` });

  return passos;
}

let funcao = '2x + 1x';
let passos = calcularDerivada(funcao);

passos.forEach(passo => {
    console.log(passo.descricao);
    console.log(passo.equacao);
  });


