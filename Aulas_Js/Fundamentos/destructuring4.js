function rand([min= 0, max = 1000]) 

{   // Se o valor min for maior que o valor maximo, crie um novo array
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//Valor min = 50 e valor max = 40, um novo array será criado
console.log(rand([50,40]))
//Apenas com o indice 1 
console.log(rand([992]))
//Apenas com o indice 2
console.log(rand([, 10]))
//Com o intervalo de 0 a 100
console.log(rand([]))
// Dará, pois está vazio
console.log(rand())