// Armazenando uma função em uma variavel


// Constante imprimirSoma recebe a função com os parametros a e b
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2,3))

// Retorno implicito com dois parametros
const subtração = (a, b) => a-b
console.log(subtração(2,3))

// Retorno implicito com um parametro
const imprimir2 = a => console.log(a)
imprimir2("Legal")

