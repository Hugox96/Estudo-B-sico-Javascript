/*Object. preventExtensions
Pode-se deletar e modificar novos atributos, porém não pode adicionar novos atributos*/

const produto = Object.preventExtensions(
    {
        nome: "Produto", preco: 1.99, tag: "promoção"
    })
console.log("Extensível:", Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Borracha escolar branca"
console.log(produto)



/* Object.seal 
Utilizando o Object.seal eu não consigo adicionar ou excluir novos elementos, porém posso modificar os existentes*/
const pessoa = { nome: "Juliana", idade: 35 }
Object.seal(pessoa)
console.log("Selado:", Object.isSealed(pessoa)) 


// Neste caso, não vai modificar nada adicionar ou deletar elementos do objeto
pessoa.sobrenome = "Silva"
delete pessoa.nome

// Posso modificar, pois já é existente este elemento
pessoa.idade = 29
console.log(pessoa)