//Neste caso a variavel let apenas permite que a instrução dentro do bloco seja lida, fora do bloco não haverá mensagem
for ( let i=0; i < 10; i++)
{
   console.log(i)
}
// Resultará em erro
console.log("i = ", i)