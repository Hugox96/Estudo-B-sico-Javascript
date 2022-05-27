
//função compras com os parametos trabalho1 e trabalho2
function compras(trabalho1, trabalho2) 

{
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}

}

console.log(compras(true,true))

console.log(compras(true,false))

console.log(compras(false,true))

console.log(compras(false,false))