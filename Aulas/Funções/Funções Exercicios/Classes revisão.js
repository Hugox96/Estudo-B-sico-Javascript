class Pessoa{
    constructor(param1, param2){
        this.atributo1 = param1;
        this.atributo2 = param2;
    }
 
    metodo1(){
        console.log("Classes são legais!");
    }
 
    metodo2(param1){
        console.log("isso é um parametro: " + param1 + " como em funções convencionais!");
    }
 
    metodoDeSoma(a, b){
        return a + b;
    }
 }