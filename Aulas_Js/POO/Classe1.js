class Lancamento 
{

    /*Sempre quando você for declarar atributos, 
    faça isso dentro do método construtor e utilizando a palavra chave this antes do nome do atributo, 
    este que é o padrão do Javascript */
    constructor (nome = "Generico", valor = 0)
    {
        this.nome = nome
        this.valor = valor 
    }
}

class CicloFinanceiro
{
    constructor(mes, ano)
    {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
 
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
        // console.log(typeof(lancamentos))
    }

    sumario() {
        let valorConsolidado = 0
        let nome = ""
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
            nome += l.nome
        })
        return [nome, valorConsolidado]
    }
}

const salario = new Lancamento("Salario e ", 4500)
const contaDeLuz = new Lancamento("Luz e ", -500)
const contaDeInternet = new Lancamento("Internet ", 170)

const contas = new CicloFinanceiro(7, 2018)
contas.addLancamentos(salario, contaDeLuz, contaDeInternet)
console.log(contas.sumario())