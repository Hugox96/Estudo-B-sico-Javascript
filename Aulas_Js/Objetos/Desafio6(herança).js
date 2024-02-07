class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} faz algum som.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} late.`);
    }
  }
  
  const dog = new Dog('Rex', 'Labrador');
  dog.speak();

  const animal = new Animal("hugo")
  animal.speak()
  