class Gerenciador_Tarefas {
    constructor(){
    this.tarefas =[]
    }

adicionarTarefas(tarefa){
    this.tarefas.push(tarefa)
}

listarTarefas(){
    if(this.tarefas.lenght ===0){
        console.log("A lista de tarefas está vazia!")
    }
    else{
        console.log("Listando tarefas")
         this.tarefas.forEach((tarefa, indice) => {
            console.log(`${indice + 1}. ${tarefa}`);
        });
    }
}

removertarefa(indice){
    if(indice >=0 && indice < this.tarefas.lenght){
        const tarefaRemovida = this.tarefas.splice(indice, 1);
        console.log(`A tarefa "${tarefaRemovida}" foi removida com sucesso.`);
    }
    else {
        console.log("Índice inválido. Nenhuma tarefa foi removida.");
    }
  }
}

const objetivos = new Gerenciador_Tarefas()
objetivos.adicionarTarefas("Estudar JavaScript");
objetivos.adicionarTarefas("Fazer compras");
objetivos.listarTarefas()
objetivos.removertarefa(0)
