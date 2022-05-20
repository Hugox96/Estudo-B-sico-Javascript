function getInteiroentre(min,max)

{

  const valor = Math.random() * (max-min) + min
  return Math.floor(valor)
  
}

let opcao = 2

while(opcao != 1) 

{ 
  opcao = getInteiroentre(-1,10)
  console.log(`A opcao escolhido foi ${opcao}`)
} 


console.log("Valeu") 

