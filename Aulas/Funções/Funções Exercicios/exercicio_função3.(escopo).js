// Variavel de escopo global, esta acessivel por todo o codigo
let MyName = "Lucas"

// escopo local, é acessivel apenas na função
function showName() 
{
    var myLastName = "Costa"
    console.log("Meu nome é " + MyName + ' ' + myLastName )

    MyName += ' ' + myLastName
}

showName()
console.log("My name is " +  MyName + " " + myLastName)