// Uma diferença importante na utilização de variáveis em javascript é 
//A utilização do let e var e seus escopos.

// //Escopo é a acessibilidade de objetos, variáveis e funções em diferentes partes do código. 
// Em outras palavras, o que determina quais são os dados que 
// podem ser acessados em uma determinada parte do código é o escopo.

// Uma variável declarada com var possui um escopo de função. 
// Isso significa que se criarmos uma variável deste tipo dentro de uma função, 
// Sua referência poderá ser identificada e modificada em qualquer parte desta função, 
// Mesmo que criemos outros escopos dentro dela, como um bloco if(), switch() ou for(). 
// Isso pode implicar alguns problemas.

//Vamos ver um exemplo disto.


//Site para estudar: https://hcode.com.br/blog/entenda-a-diferenca-entre-var-let-e-const-no-javascript

function nome() {
    // 1º Declaração
    var nome = "Hugo";

    //Escopo dentro do bloco do If
    if (nome === "Hugo") {
        var nome = "Ugo";
        console.log("Dentro do If" + nome);
    } // fim do if

    console.log("Fora do If" + nome)
} // fim da função

nome(); // chamando a função

// Um variável declarada com let leva em conta, não a função onde foi criada, 
// Mas sim o bloco de código de sua origem. 
// Isso significa que se a declararmos dentro de um if(), switch() ou for(), 
// Ela será “enxergada” apenas dentro desta parte do código, dentro deste escopo específico.

// Vamos ver como ficaria o código da função returnCar() com o let:

function nome() {
    //1º declaração
    let nome = 'Hugo';
    //Escopo do if
    if(nome === "Hugo") {
        let nome = "Ugo";
        console.log("Dentro do if " + nome);
    } // Fim do if

    console.log("Fora do if " + nome); 
} // Fim da função
nome();

//Vamos criar um for para os anos até 2022 utilizando var e let.
for(var i = 2000; i <= 2005; i++) {
    console.log(i); // O correto seria ir de 2000 a 2005
}
console.log("Fora do for " + i); // Aqui ele lê a variavel mais uma vez, sendo 2006


// Agora com let 
for(let i = 2000; i <= 2005; i++) {
    console.log(i); // O correto seria ir de 2000 a 2005
}

console.log("Fora do for " + i); // Vai dar erro pq eu não deveria chamar fora do for
