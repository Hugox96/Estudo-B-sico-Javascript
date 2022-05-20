let valor // não inicializada
console.log(valor)
console;log(valor2)

valor = null // ausência de valor, não há endereço de memória
console.log(valor)
// console.log(valor.tostring()) !Erro!

const produto = {}
console.log(produto.preço)
console.log(produto)

produto.preço = 3.50
console.log(produto)

produto.preçp = undefined // eviter atribuir undefined
console.log(!!produto.preço)
console.log(produto)

produto.preço = null // sem preço
console.log(!!produto.preço)
console.log(produto)
