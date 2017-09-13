# Classes/Prototypes and Inheritance

### Objectives
*By the end of this lesson, students should be able to:*
* Create a class that inherits from another using the `extends` and `super` keywords
* Define the concept of inheritance as it pertains to classes
* Use namespaces to organize application code
* Define a custom constructor method that sets one or more
properties of a new object

### Preparation
*Before this lesson, students should already be able to:*
* Create and understand Javascript variables, functions, and callbacks
* Create basic objects with properties and methods in Javascript
* Understand basic Ruby-based OOP

## Refresher on Objects (5 min/ 0:05)
So far, we've had to make our objects 'by hand' (i.e. using object literals)...
```
var celica = {
  model: 'Toyota Celica',
  color: 'limegreen',
  fuel: 100,
  drive: function() {
    console.log('Vroom!')
  }
}

var civic = {
  model: 'Honda Civic',
  color: 'lemonchiffon',
  fuel: 100,
  drive: function() {
    console.log('Vroom!')
  }
}
```
**What are some Pros to this approach?**
* Readability
* Well organized
* Fewer global variables -- Does not pollute global namespace

**What are some Cons?**
* So much duplication.  Not very 'DRY'

What if we had one hundred cars we were making?  Writing out object literals by hand can get very tedious.  What if we could build a function that makes them for us?

### We Do: Create a makeCar Function (5 minutes / 0:10)
```
function makeCar(model, color){
  return {
    model: model,
    color: color,
    fuel: 100,
    drive: function() {
      console.log('Vroom!')
    }
  }
}
//Now all we need to call on this function to create our cars
var celica = makeCar("Toyota Celica", "limegreen")
var civic = makeCar("Honda Civic", "lemonchiffon")
```
This is the basic idea behind OOP; we define a blueprint for an object and use it to generate multiple instances of it!

## Classes
It's so common that we need to make objects with similar properties and methods that programming languages usually have some features to help with this.

In Javascript, ES6 added a feature called classes to accomplish this. A class serves as a blueprint for instantiating new objects.

Let's take a look the following Car class:
```
class Car {
  constructor(model, color){
    this.model = model
    this.color = color
    this.fuel = 100
  }
  drive(){
    this.fuel--
    return "Vroom!"
  }
  refuel(){
    this.fuel = 100
  }
}

const celica = new Car("Toy-Yoda Celica", "limegreen")
const civic = new Car("Honda Civic", "lemonchiffon")
```
Classes work a lot like the makeCar function we just created, but are a more performant and offer more robust features.

Notice we use the **constructor** function to pass in our arguments

We use the new keyword to generate instances of a class (just like our earlier celica and civic examples).

## Inheritance (5 min / 0:15)
Although OOP can help us keep our Javascript nice and clean, it's still easy to duplicate code when defining multiple classes. Consider the following example...
```
class Dog {
  constructor (name, breed, tail) {
    this.name = name
    this.breed = breed
    this.waggingTail = tail
    this.diet = []
  }
  eat (food) {
    this.diet.push(food)
    console.log(this.diet)
  }
  bark () {
    return `Bark! Hello, this is dog. My name is ${this.name}`
  }
}

class Cat {
  constructor(name, breed, numLives){
    this.name = name
    this.breed = breed
    this.numLives = numLives
    this.diet = []
  }
  eat(food){
    this.diet.push(food)
    console.log(this.diet)
  }
  meow(){
    return `Meow! I am not a dog! My name is ${this.name}`
  }
}
```
Here we are running into the same problem as before.  Our code is not very 'DRY'

How could we refactor this so that we don't have to keep writing out the shared class properties and methods. Enter **inheritance**
```
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
    return `Bark! Hello, this is dog. My name is ${this.name}`
  }
}

class Cat extends Animal {
  constructor(name, breed, numLives){
    super(name, breed)
    this.numLives = numLives
  }
  meow(){
    return `Meow! I am not a dog! My name is ${this.name}`
  }
}
```
Notice some of our new keywords:
* **extends** tells javascript that we are building a new class that inherits the properties and methods from our parent class
* **super** passes our parameters up to our parent class
