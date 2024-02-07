// criando o objeto carro
const carro = {
    velAtual: 0,
    velMax: 200,
    turbo: false, // Novo atributo para controlar o turbo

    // essa metodo é responsável para definir a velocidade, garantindo que não ultrapasse a velocidade maxima
    acelerarMais(delta) {
        // Se a velocidade for menor ou igual a delta, velocidade atual recebe delta
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        // Caso não seja, velocidade atual recebe velocidade max, nesse caso 200    
        } else {
            this.velAtual = this.velMax;
        }
    },
    // aqui a logica é quase a mesma, porém caso turbo seja true, incrementa 20 a velocidade max, caso false não muda nada
    acelerarComTurbo(delta) {
        if (this.velAtual + delta <= this.velMax + (this.turbo ? 20 : 0)) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax + (this.turbo ? 20 : 0);
        }
    },

    // aciona o turbo 
    ativarTurbo() {
        this.turbo = true;
    },
    //desativa o turbo
    desativarTurbo() {
        this.turbo = false;
    },

    status() {
        return `${this.velAtual}Km/h de ${this.velMax + (this.turbo ? 20 : 0)}Km/h ${this.turbo ? '(Turbo Ativado)' : ''}`;
    }
};

// Exemplo de uso:
carro.ativarTurbo()
carro.desativarTurbo()
carro.acelerarComTurbo(50);
console.log(carro.status()); // Exibe a velocidade atual, a velocidade máxima com o turbo e se o turbo está ativado
