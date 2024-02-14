
// classe principal com os atributos dos personagens
class Personagem {
    constructor(nome, vida) {
    this.nome = nome; 
    this.vida = vida;
 }


//Criando os metodos

    receberDano(dano) {
        console.log(`${this.nome} recebeu ${dano} de dano.`);
        this.vida -= dano;
        console.log(`${this.nome} agora tem ${this.vida} pontos de vida.`);

        if(this.vida <= 30) {
            // irei criar daqui a pouco
            this.usarBurst();
        }

        if(this.vida == 0) {
            console.log("O personagem foi de F");
        }
    }    

    usarBurst() {
        console.log(`${this.nome} usou Burst e recuperou 50 pontos de vida.`);
        this.vida += 50;
        console.log(`${this.nome} agora tem ${this.vida} pontos de vida.`);
        }
    }

const jogador1 = new Personagem('Guerreiro', 100);
const jogador2 = new Personagem('Mago', 80);

jogador1.receberDano(30)
jogador1.receberDano(40)
