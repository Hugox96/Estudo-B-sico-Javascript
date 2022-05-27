let dobro = function (a) 
{
    return 2 * a
}

// Função arrow com return explicito
dobro = (a) => 
{
  return 2 * a
}
// Função arrow com return implicito
dobro = a => 2 * a
console.log(dobro(7))

let ola = function () 
{
    return "Ola" // Nao entendi
}

ola = () => "Ola"
ola = _ => "Ola" // Possui param
console.log(ola())