

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//O simbolo ! é negação, !true = false e !!true = true
isAtivo = 1
console.log(!!isAtivo)

console.log("os verdadeiros")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!! {})
console.log(!!Infinity)
console.log(!!(isAtivo=true))

console.log("Os falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("pra finalizar")
console.log (!!("" || null || 0 || "" ))

//Caso nome não tenho resposta, imprimirá na tela desconhecido
let nome = ''

console.log( nome || 'Desconhecido') 
