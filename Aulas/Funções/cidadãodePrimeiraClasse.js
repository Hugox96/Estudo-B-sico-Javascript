//Função em JS é First-Class OBject (Citizens)
//Higher-order function

//Criar de forma literal, sem parametros
function fun1(){}
// Armazenando em uma variavel
const fun2 = function() {}

// Armezenando em um array
const array = [function(x,y) {return x + y} fun1, fun2]
console.log(array[0](2,3))

// Armezando em um  atributo objeto 
const obj = {}
obj.falar = function () {return "Opa"}
console.log(obj.falar())

// Passar uma função como parametro
function run(fun) 
{
    fun()
}

run(function () {console.log("Executando...")})

// Uma função pode retornar uma função
function soma(a,b) 
{
    return function(c) 
    {
        console.log(a+b+c)
    }
}

soma(2,3)(4)

//ou criand uma variável

const CincoMais = soma(2,3)
CincoMais(4)