class Animal {
  constructor(name, breed){
    this.name = name
    this.breed = breed
    this.diet = []
  }
  eat(food){
    this.diet.push(food)
    console.log(this.diet)
  }
}

class Dog extends Animal {
  constructor(name, breed, tail){
    super(name, breed)
    this.waggingTail = tail
  }
  bark(){
    console.log(`Bark! Hello, this is dog. My name is ${this.name}`)
  }
}

class Cat extends Animal {
  constructor(name, breed, numLives){
    super(name, breed)
    this.numLives = numLives
  }
  meow(){
    console.log(`Meow! I am not a dog! My name is ${this.name}`)
  }
}

const goat = new Animal("Gregory", "Mountain Goat")

const fido = new Dog("Fido", "Beagle", true)

const samuel = new Cat('Samuel', 'Cheshire', 9)
