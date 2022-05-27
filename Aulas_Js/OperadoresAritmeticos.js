// Operadores aritmeticos são os mais conhecidos e um dos mais importantes. Vamos vê-los:

//https://medium.com/solu%C3%A7%C3%B5es-freecodecamp/tabuada-com-template-string-js-7210c513c700

//Declarando as variáveis
let a = 10;
let b = 20;

//Vou criar funções para realizar as operações

function soma() {
  
   c = a + b; 
   console.log(c);

}
soma(); // Sem chamar a função não vai acontecer o console.log

function diferenca() {
    c = a - b;
    console.log(c);
}
diferenca();


function div_mult() {
    
    c = a/b;
    console.log(c);
    
    d= b*a
    console.log(d);
}
div_mult();

function resto() {
    c = a % b; // Esse é o resto da divisão, como nesse caso não é possível o resultado é 10
    console.log(c)
}
resto();

function incremento() {
    
//  No pré incremento temos a operação de atribuição de valor 
//    sendo realizada antes de uma outra operação do mesmo tipo

//     Já no operador de pós incremento temos a operação de atribuição 
//    sendo realizada após uma outra atribuição do mesmo tipo

   var i = 3;
   var j = 3;
console.log(++i); // pré incremento -> 1
console.log(j++); // pós incremento -> 1

    var x = 1
    var y = 0
    x = ++i; // pré incremento 
    y = j++; // pós incremento

console.log("x:", x); // 2
console.log("y:", y); 

}

incremento();