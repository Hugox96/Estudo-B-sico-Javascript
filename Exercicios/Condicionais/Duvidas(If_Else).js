let numero = 100;
//1º if com a condição verdadeira
if(numero <= 100) {
  console.log("Menor ou igual a 100")
}
//Neste caso não irá funcionar porque a condição já atende o primeiro if
//Embora os dois sejam verdadeiros, a 1º condição já basta
else if(numero < 1000) {
  console.log("Você não tem 18 anos ainda")
}

// Aqui será executado, porque a condição é verdadeira, 100 é menor que 1000
// Os dois ifs são blocos independentes
if(numero <1000){
  console.log("Menor ou igual a 1000")
}

// O que podemos entender é: 
// 1º Blocos de else e else if só executam se nenhuma das condições anteriores tiver sido atendida. 
// 2º Os dois Ifs são independentes e anbas tem condições verdadeira
