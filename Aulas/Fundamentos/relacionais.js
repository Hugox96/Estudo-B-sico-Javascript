//Neste caso estamos verificando o valor
console.log("01)", "1" == 1)
//Neste caso estamos verificando o tipo do dado, ===, ie, estritamente igual
console.log("02)" , "1" === 1)
//Estamos verificando se o valor é diferente
console.log ("03)", 3 != 3)
//Estamos verificando se os tipos de dados são diferentes, !=, ie, estritamente diferentes
console.log("4)", "3" !== 3)
//3 é menor ou igual a 2
console.log("5)", 3 <= 2)
// 3 é maior ou igual a 2
console.log("6)", 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log("07)", d1 == d2)
console.log("08)", d1.getTime() == d2.getTime())
console.log("09)", undefined == null)
console.log("10)", undefined === null)