
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

        // //Aqui tem um problema, nessa configuração o presonagem nunca vai morrer, pois não chegará no vida == 0
        // if(this.vida <= 30) {
        //     // irei criar daqui a pouco
        //     this.usarBurst();
        // }

        // if(this.vida == 0) {
        //     console.log("O personagem foi de F");
        // }

        // Agora ele avalia primeiro se o personagem tem 0 de vida, só dps usar o metodo usar.Burst
        if(this.vida == 0){
            console.log("O personagem foi de F");
        }

        else if (this.vida <= 30) {
                 this.usarBurst();
         }

    }    
    //Quuando a vida fica abaixo de 30 ele usa o metodo burst, no entanto há um problema, ele faz isso sempre. Temos que limitar  
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
jogador1.receberDano(60)
jogador1.receberDano(70)
