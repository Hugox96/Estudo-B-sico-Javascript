// Para treinar as operações aritméticas básicas, vou criar uma tabuada simples.

//https://www.javascriptprogressivo.net/2018/12/Como-Criar-Tabuada-JavaScript.html

// Para isso vou criar uma função que realize um for percorrendo de 0 a 10 com um número de minha escolha
function tabuada() {
    var n = 5; // Declarando a variável
    
    //criando um loop com for para ler de 0 a 15
    for(var i = 0; i<=15; i++){
        console.log(`${n} X ${i} = ${n*i}`); // Imprimindo o valor na tela
    }
}

tabuada();
