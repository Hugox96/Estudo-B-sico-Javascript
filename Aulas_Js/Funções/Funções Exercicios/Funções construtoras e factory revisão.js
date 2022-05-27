

// Criando objetos com a  função construtora
function aluno (nome, prova, trabalho)
{
    this.nome = nome
    this.GetAluno = () => 
    { 
        return  (trabalho + prova) / 2
    }
}

const a1 = new aluno ("Hugo", 9, 6)
const a2 = new aluno ("Lucas", 8, 8)
console.log("Hugo", a1.GetAluno(), "Lucas", a2.GetAluno())

//Criando objetos com função factory

function salario(nome, horas, dinheiro, semana, dias )
{
return {
    nome,
    horas,
    dinheiro,
    dias,
    semana,
    getSalario()
      {
        return (horas*dinheiro*dias*semana)
      }
    }
}

const s1 = salario("lucas", 6, 9, 4, 5)
console.log(s1.getSalario())