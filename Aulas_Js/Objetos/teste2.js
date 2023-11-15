const math = require('mathjs');

function calcularDerivada(funcao) {
  let passos = [];

  // Passo 1: Identificar a função
  passos.push({ descricao: 'Passo 1: Identifique a função:', equacao: `f(x) = ${funcao}` });

  // Passo 2: Dividir a função em termos
  let termos = funcao.split('+');

  // Passo 3: Calcular a derivada de cada termo
  for (let i = 0; i < termos.length; i++) {
    let termo = termos[i].trim();

    // Converte o termo para uma expressão válida do math.js
    let expr = math.parse(termo);
    // Calcula a derivada do termo
    let derivada = math.derivative(expr, 'x').toString();
    passos.push({ descricao: `Passo ${i + 2}: A derivada de ${termo} é:`, equacao: `f'(x) = ${derivada}` });
  }

  return passos;
}

let funcao = '2x + 1x';
let passos = calcularDerivada(funcao);

passos.forEach(passo => {
  console.log(passo.descricao);
  console.log(passo.equacao);
});
