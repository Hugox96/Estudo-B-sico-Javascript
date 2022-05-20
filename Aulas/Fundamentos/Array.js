
//criando um array
const valores = [7.7, 8.9, 6.3,9.2]
console.log(valores[0], valores[3])

valores[4] = 10

console.log(valores)
//imprimindo o número de elementos
console.log (valores.length)

//adicionando dados no array valores
valores.push({id:3}, false, null, 'teste')
console.log(valores)

//deleta o último dado do array
console.log(valores.pop())

// deletando o array de indice zero
delete valores[0]

console.log(valores) 

console.log(typeof valores)