//hoisting é o efeito de colocar a a variável var no topo, mesmo que não declarada inicialmente

console.log("a = ", a)
var a = 2
console.log('a =', a)

console.log("b = ", b)
let b = 2
console.log("b = ", b)