
// JavaScript é uma linguagem dinâmica ou pouco “tipada”, 
// Isso faz com que uma variável não se associa a nenhum tipo, 
// Mas seu valor sim. Em outras palavras, 
// A mesma variável pode guardar valores de tipos diferentes a qualquer momento.

// Vamos ver no exemplo abaixo:

let foo = 120;  //foo recebe o número 120
foo = false;   //foo é falso
foo = "foo";  //foo é a string foo

// Aqui foo vai assumir a última declaração 
console.log(foo)

// 1º Tipo Undefined

// O tipo undefined é um tipo primitivo que tem um valor especial undefined. 
// Por padrão, quando uma variável é declarada, mas não inicializada, 
// É atribuído a ela o valor undefined.

let foo; // Como não foi declarada, foo é undefined
console.log(foo)
console.log(typeof foo)


// 2º Tipo Null

// O tipo null é o segundo tipo de dado primitivo que tem somente um valor: null. 
// O JavaScript define que null é um ponteiro de objeto vazio.

let obj = null;
console.log(typeof obj)
//é uma boa prática atribuir null a uma variável irá guardar um objeto no futuro



// 3º Tipo Number

// O Js usa o formato IEEE-74 para representar números inteiros e de pontos flutuantes.

// vamos declarar um número inteiro:
let int = 100;

// Um numero flutuante:
let float = 11.5;

// JavaScript converte um número ponto flutuante em um número inteiro se o número parecer ser com um número 

// inteiro (quando depois do ponto tiver apenas zeros).
let float2 = 200.00; // será interpredado como um inteiro

// 4º Tipo String

// No JavaScript, uma string é uma sequencia de zero ou mais caracteres.
var bar = ''; // Uma string vazia
var foo = "Uma string grande"; // Uma string cheia

 // 5º Tipo Boolean

 // O tipo boolean possui dois valores true ou false.
 let inProgress = true;
 let done = false;
 console.log(typeof done); // boolean

// 6º Tipo Objeto

// No JavaScript, um objeto é uma coleção de propriedades, 
// onde cada propriedade é definida com um bar de chave e valor.
var objeto ={
    nome: "Hugo",
    sobrenome: "Alves",
};

// O objeto amigos possui as nome1, nome2, nome3, nome4 e endereço. 
// A propriedade endereço também é um objeto que possui as propriedades rua, bairro e numero.
var amigos ={
    
    nome1: "Lucas",
    nome2: "Passarinho",
    nome3: "Marcio",
    nome4: "Fernanda",
    endereço: {
        rua: "Luiz Silva",
        bairro: "Abolição",
        numero: "46"
    }
}

