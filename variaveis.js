// Variáveis são utilizadas para guardar dados e valores
// No javascript temos três tipos: var, let e const
// O tipo var permite guardar diferente tipos de dados, vamos ver:


// Criando os dados
var x = 14;
var y=  6;

//Fazendo operações
var z = x + y;

//Imprimindo no console
console.log(z)

// Ao criar uma variavel e não guardar dados, a variavel será indefinida
var indefinida;
console.log(indefinida)

//Podemos declarar várias variáveis em uma mesma linha
var pessoa = "Hugo", profissao = "Empreendedor", salario = 10200;
// Neste caso ao chamar o console.log terá um erro de referencia, pq pessoa não está definido
// console.log(pesso) 
 console.log(pessoa)

 // Utilizando o var também podemos redeclarar as variaveis
 var redeclarando = 1;
  console.log(redeclarando) // antes de redeclarar o valor é 1

 var antes = 2;
  console.log(redeclarando) // agora o valor será 2

