function Carro(velocidadeMax = 200, delta = 5)
{
// atributo privado
let velocidadeAtual = 0


// metodo publico
this.acelerar = function ()
{
    if(velocidadeAtual = delta <= velocidadeMax)
    {
        velocidadeAtual += delta
    }
    else 
    { 
        velocidadeAtual = velocidadeMax
     }
}

this.getvelocidadeAtual = function ()
{
    return velocidadeAtual
}

}

//INSTANCIANDO A FUNÇAO 1
const uno = new Carro
uno.acelerar()
console.log(uno.getvelocidadeAtual())
//iNSTANCIANDO A FUNÇAO 2
const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual))
