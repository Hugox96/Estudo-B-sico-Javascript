// cria a classe pai animal
class Animal {
    constructor(name) {
      this.name = name;
    }
  // cria o metodo da classe principal
    speak() {
      console.log(`${this.name} faz algum som.`);
    }
  }
  
  // Cria uma herança da classe principal, sendo a classe cachorro
  class Dog extends Animal {
    constructor(name, breed) {
      // herda o atributo nome da classe animal
      super(name);
      // cria um novo atributo
      this.breed = breed;
    }
  
    // cria um metodo da classe dog
    speak() {
      console.log(`${this.name} late.`);
    }
  }
  
  // instancia a classe dog
  const dog = new Dog('Rex', 'Labrador');
  dog.speak();
// instancia a classe animal
  const animal = new Animal("hugo")
  animal.speak()
  