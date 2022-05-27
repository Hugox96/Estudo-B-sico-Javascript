
function imprimirResultado(nota) 
{
    if(nota >= 7) 
    { 
        console.log("Aprovado")
    }

    else 
        {
        console.log("Reprovado")
         }
}

//Chamando a função
imprimirResultado(9.5)
imprimirResultado(5)

//imprimirResultado("Epa!") lerá, pois javascript é de tipagem fraca