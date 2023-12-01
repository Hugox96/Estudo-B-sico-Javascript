
// algorimito de euclides
function mcd(a, b) {
    while (b !== 0) {
    //   console.log("1º valor b",b)
      var temp = b;
    //   console.log("2º valor temp",temp)
      b = a % b;
      a = temp;
      console.log("esse é o a",a)
    }
    return a;
  }
  
  var resultado = mcd(48, 18);
  console.log(resultado);
  

  
// Excelente exercicio!. Nesse caso ele começa com b igual 18 e o loop do while continua até que b seja diferente de 0. Ele começa com temp = 6, que neste caso é 18. Depois b se torna a%b que na primeira interação é 18.
// Logo b será:
// 1º loop 18, 2º loop 12, 3º loop 6, 4º loop 0(fim). 
// Já a será o valor de b definido antes da operação do modulo, sendo 1º 18, 2º 12 e 3º 6(nosso valor).