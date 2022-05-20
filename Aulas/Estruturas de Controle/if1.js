//A função exibirá apenas valor iguais ou maiores que 7
function soBoaNoticia(nota)
{
    if(nota >= 7) {
                     console.log("Aprovado com " + nota)
                  }
                
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

// A função exibirá apenas valores true
function seForVerdadeEuFalo(valor) 
{
 
    if(valor)
 {
     console.log("É verdade ... " + valor)
 }

}

//Valores falsos
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
//Valores verdadeiros
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
