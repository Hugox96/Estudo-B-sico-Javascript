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

let funcao = '2x + 1';
let passos = calcularDerivada(funcao);

passos.forEach(passo => {
    console.log(passo.descricao);
    console.log(passo.equacao);
  });


