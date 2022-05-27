// par nome/valor
const saudacao = "Opa" //contexto léxico 1


// variavel declarada em escopo de função, não causará problemas

function exec() {
    const saudacao = "Falaa" // contexto léxico 2
    return saudacao
}

//Objetos são grupos alinhados de pares/valore podem ser aninhados um dentro do outro
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: "Rua muito legal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)