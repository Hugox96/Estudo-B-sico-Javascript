
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