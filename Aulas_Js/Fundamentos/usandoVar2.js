
// como o var ignora os blocos de intrução, o valor de numero será sobreescrito
var numero = 1
{
    var numero = 2
    console.log("dentro = ", numero)
}

console.log("fora=" numero)