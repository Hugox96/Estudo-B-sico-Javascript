const precos = [3.4, 5.6, 8.7, 9.6, 6.5]

// Sem função callback
const precosBaixos1 = []
for(let i in precos)
{
    if( precos[i] < 9)
    {
        precosBaixos1.push(precos[i])
    }
}

console.log(precosBaixos1)

//com Função callback
const precosBaixos2 = precos.filter(function(precos)
{
    return precos < 9
})

