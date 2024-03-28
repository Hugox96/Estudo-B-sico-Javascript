// Um dos problemas do var é que ela não é definida em um escopo, isto é, mesmo fora de um escopa ela pode mudar de valor

// declarando antes
var saudacao = "ola amigos"
console.log("antes", saudacao)

var times = 4
// if sendo true
if(times > 3){
    var saudacao = "vai embora"
}

// mudar o valor final
console.log("depois", saudacao)


// Neste caso dará erro pq estamos tentando chamar hello fora do escopo do if
let greeting = "say Hi";
let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// dirá "say Hello instead"
    }
   console.log(hello) // hello não está definido


//Aqui não dará erro pq não está chamada fora do escopo
let greetin = "say Hi";
    if (true) {
        let greetin = "say Hello instead";
        console.log(greetin); // retornará "say Hello instead"
    }
console.log(greetin); // retornará "say Hi"


// Utilizando em funções
function teste() {
    for ( var x = 10 ; x < 20 ; x++ ) { // x é acessível em qualquer lugar dentro da função
        var y = 42; // y é acessível em qualquer lugar dentro da função
    }
}

for ( var x = 10 ; x < 20 ; x++ ) { // x é globalmente acessível
    var y = 42;
    console.log(y) // y é globalmente acessível
}