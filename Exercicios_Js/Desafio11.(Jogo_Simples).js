
// classe principal com os atributos dos personagens
class personagem {
    constructor(nome, vida){
    this.nome = nome;
    this.vida = vida;
 }
}

//Criando os metodos

receberDano(dano) {
    console.log(`${this.nome} recebeu ${dano} de dano.`);
    this.vida -= dano;
    console.log(`${this.nome} agora tem ${this.vida} pontos de vida.`);

    if(this.vida <= 30) {
        // irei criar daqui a pouco
        this.UserBuster()
    }
}
