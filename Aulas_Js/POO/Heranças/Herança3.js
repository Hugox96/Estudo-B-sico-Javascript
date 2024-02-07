const pai = { nome: "pedro", corCabelo: 'preto', corPele: "branco nazista"
}

const filha1 = Object.create(pai)
console.log(filha1.corCabelo)

// Fixando o nome das filhas
const filha2 = Object.create(pai, {
    nome: { value: "Juisara", writable: false, enumerable:true}
})

//Chama o nome declarado anteriormente
console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo} e cor de pele ${filha2.corPele}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for( let key in filha2)
{
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}

