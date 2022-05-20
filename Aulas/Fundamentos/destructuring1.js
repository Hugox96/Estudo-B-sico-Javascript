// novo recurso deo ES2015

const pessoa = 

{
    nome: "Ana",
    idade: 5,
    endereco: 
    {
         logradouro: "Rua ABC",
         numero: 1000
    }

}

//Extrai os atributos nome e idade do objeto pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

//Extrai os atributos nome e idade do objeto pessoa e cria novas variaveis
const {nome: n, idade: i} = pessoa
console.log(n,i)

// Extrai atribuidos que não estão definidos no objeto pessoa
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

//Extrai atributos dentro um objeto presente em pessoa, 
//Neste caso não derá erro pois endereço está definido no objeto pessoa
const { endereco: {logradouro,numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//Extrai atributos de forma aninhada que não existem no objeto pessoa, neste caso dará erro
const {conta: {ag, numero }} = pessoa
console.log(ag, numero)