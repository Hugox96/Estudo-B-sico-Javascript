const carro = {
    velAtual: 0,
    velMax: 200,
    turbo: false, // Adicionando a propriedade turbo

    acelerarMais(delta) {
        if (this.velAtual + delta <=  this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }

        if (this.turbo) { // Verifica se o turbo está ativado
            console.log("ola")
            this.velMax += 20; // Aumenta a velocidade máxima em 20
        }
    },

    ativarTurbo() {
        if (this.turbo) { // Verifica se o turbo está ativado
            console.log("ola")
            this.velMax += 20; // Aumenta a velocidade máxima em 20
        }
    },

    status() {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`;
    }
}


carro.turbo = true;
carro.ativarTurbo(); // Define turbo como true para ativá-lo
carro.acelerarMais(250); // Acelera além da velocidade máxima original
console.log(carro.status()); // Exibe o status do carro com o turbo ativado
