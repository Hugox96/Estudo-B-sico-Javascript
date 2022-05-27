//Criando um array
const fabricantes = ["Mercedes", "Audi", "BMw"]

//Criando uma função com os param nome e indice
function imprimir(nome, indice)
{
    console.log(`${indice + 1}. ${nome}`)
}

//Chamando a função imprimir
fabricantes.forEach(imprimir)
//Criando uma função callback
fabricantes.forEach(fabricantes => console.log(fabricantes))