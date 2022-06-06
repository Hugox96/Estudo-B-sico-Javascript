// Operadores de incremento

// Online Javascript Editor for free

// Operadores de incrementos e decrementos são muito utilizados em loops, e também são bem importantes para não criar um loop infinito

// Vamos criar um loop com whíle 
let Dolar = 5 
let Real = 1

//Enquanto Real for menor ou igual a dolar, o código rodará
while (Real <= Dolar)
{
    console.log(`Real = ${Real}`)
    Real ++ // Real vai de 1 até 5
}


// Vamos criar uma contagem regressiva agora na virado do ano

//Declarando a variavel segundos
let segundos = 10
//Enquanto segundos for maior ou igual a 1, o laço será true
while(segundos>=1){
    console.log(`${segundos}`)
    //Quando segundos for igual ao valor 1, aparecerá está mensagem
    if(segundos == 1) {
    console.log("Feliz ano novo")
    }
    segundos --
}



