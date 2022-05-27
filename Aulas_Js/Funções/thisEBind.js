const pessoa = 

{
    saudacao: "Bom dia",
    falar()
    {
        console.log(this.saudacao)
    }

}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradigmas: funcional e Orientadas a objetos

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() 