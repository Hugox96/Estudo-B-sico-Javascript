const nerdamer = require('nerdamer/all');

// Defina a expressão que você deseja integrar
const expressao = '1/x';
const exp = "2x"

// Realize a integração
const resultado = nerdamer.integrate(expressao, 'x');
const resultado1 = nerdamer.integrate(exp, 'x');
// Exiba o resultado
console.log("resposta é: ", resultado.toString());
console.log("resposta é: ", resultado1.toString());

