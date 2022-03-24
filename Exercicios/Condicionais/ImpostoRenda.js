let salario = 3000

if (salario <= 1903) {
  console.log(" É isento de imposto de renda")
}


else {
  if (1903 <= salario && salario < 2826) {
    console.log("É descontado 7,5%")
  }

  else {
    if (2826 <= salario && salario <= 3751) {
      console.log("É descontado 15%")
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

