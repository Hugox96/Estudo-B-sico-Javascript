// let numeros = [1,2,3,4,5,6,7]
// numeros.forEach(num  => console.log(num * 2))
let piece = [1, 2, 3];
let _ = ['Team A'];


piece.forEach(el => _.push(el));  // Adiciona o valor de `i` ao array `_`

console.log(_);  // Imprime: ['Team A', 0, 0, 0]
