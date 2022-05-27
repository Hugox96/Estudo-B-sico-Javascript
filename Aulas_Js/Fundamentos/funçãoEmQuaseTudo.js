console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

//Função sem retorno

function imprimirSoma(a,b) {
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,10,3,5)
imprimirSoma()


//Função com retorno
function soma(a,  b = 1) {
    return a + b
}

// Vai realizar a operaçao  da função soma
console.log(soma(2,3))
console.log(soma(2))