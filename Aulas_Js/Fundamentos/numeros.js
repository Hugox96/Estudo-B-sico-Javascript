
//Declarando a constante peso 1 com o valor 1
const peso1 = 1.0

//Declarando a constante peso 2 como o valor 2
const peso2 = Number("2.0")

//imprimindo o valores na tela
console.log(peso1, peso2)

//Imprimira se peso 1 e peso 2 são numeros inteiros
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))


const avaliacao1 = 9.871
const avaliacao2 = 6.971

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1+ peso2)

console.log(total)
console.log(media)

//Fixa as casas decimais
console.log(media.toFixed(2))
//Tipo de dados de media
console.log (typeof media)
