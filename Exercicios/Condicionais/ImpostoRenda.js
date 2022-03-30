let salario = 3000



if (salario < 1903) {
  console.log(" É isento de imposto de renda")
}


else {
  if (1903 <= salario && salario < 2826) {
    var faixa1 = salario*3 
    console.log(`É descontado 7,5%, ${faixa1}`)
  }

  else {
    if (2826 <= salario && salario <= 3751) {
      var faixa2 = (0.15 * salario) - 354.80
      console.log(`É descontado 15%, ${faixa2}`)
    }

    else {
      if (3751 <= salario && salario <= 4664) {
        console.log("É descontado 22,5%")
      }

      else {
        console.log("É descontado 27,5%")
      }
    }
  }
}