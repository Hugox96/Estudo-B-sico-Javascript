
function tratarErroELancar(erro)
{
    //throw new Error("desculpe")
    throw 10
}

function imprimirNomeGritado(obj) 
{
    try {
    console.log(obj.name.toUpperCase() + "!!!")
         } catch(e)
           { 
         tratarErroELancar(e)
           } finally {
               console.log("final")
           }
        }
const obj = {name: "Roberto"}
imprimirNomeGritado(obj)