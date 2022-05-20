const soma = function(x,y)
{
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma)
{
    console.log(operacao (a,b))
} 

imprimirResultado(3,4)
imprimirResultado(3, 5, soma)

//Criando uma função anonima com os parametros 3 e 4
imprimirResultado(3,4, function(x,y)
{
    return x - y
} )

//Criando uma função arrow anonima, com os parametros 3 e 4
imprimirResultado(3,4,(x,y) => x*y)


const pessoa = {
    falar:function()
    {
        console.log("flamengo vai ganhar hoje")
    }
}

pessoa.falar()