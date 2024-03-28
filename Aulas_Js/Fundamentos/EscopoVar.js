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