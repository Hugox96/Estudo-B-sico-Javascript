// Função arrow com operador ternário
const resultado = function( nota ) 
{
    return => nota >= 7 ? "Aprovado" : "Reprovado"
}
//recebe o resultado e imprime
console.log(resultado(7.1))
console.log(resultado(6.7))