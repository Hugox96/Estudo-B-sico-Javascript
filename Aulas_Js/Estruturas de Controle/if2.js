function teste1(num) 
{
    if(num > 7)
    {
     console.log(num)
    }
    
    //Está independente do if
     console.log("final")

}

teste1(6)
teste1(8)

function teste(num)
{
   if(num > 7); // Não usar ";" em estruturas de controle
   {
       console.log(num)
   }

}

teste2(6)
teste2(8)