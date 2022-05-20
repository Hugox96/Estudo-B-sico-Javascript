const produto = new Object
produto.nome = "Cadeira"
produto["marca do produto"] = "Generica"
produto.preco = 220
console.log(produto)

// Podemos deletar alguns atributos com o delete
delete produto.preco
delete produto["marca do produto"]

console.log(produto)

const carro = { 
    modelo: 'A4',
    valor: 89000,
    
    //criando um Objeto dentro do objeto carro
    proprietario:{
    nome: 'Raul',
    idade: 56,
    //criando um Objeto dentro do objeto propretário
    endereco: 
            {
            logradouro: 'Rua ABC',
            numero: 123
            }
    },
        condutores: [{
        nome: 'Junior',
        idade: 19
        }, {
           nome: 'Ana',
           idade: 25
           }],
           
    calcularValorSeguro: function()
    {
         //....
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)