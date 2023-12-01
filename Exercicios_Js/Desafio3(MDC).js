
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
  