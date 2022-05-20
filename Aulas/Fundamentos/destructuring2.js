const [a] =  [10]
console.log(a)

//Cria um array com o operado destructuring, com alguns termos ignorados e outros definidos
const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//Cria um array e ignora, cria um segundo array e ignora seu primeiro elemento,
//O elemento nota é igual a 9, e 8 é indefinido.
const [, [, nota]] = [[, 8,8]], [9,6,8]]
console.log(nota)