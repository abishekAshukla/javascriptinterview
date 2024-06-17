// Inheritance in JavaScript refers to how objects can inherit properties and methods from other objects. JavaScript is a prototype-based language, meaning objects can directly inherit from other objects.

// In JavaScript, prototypes are a key aspect of how inheritance is implemented. Every JavaScript object has an internal reference to another object called its prototype

// Prototypes and Objects:
// In JavaScript, almost everything is an object or behaves like one. Each object in JavaScript has a prototype, which is essentially another object that the current object inherits properties and methods from.

// Prototype Chain:
// When you try to access a property or method of an object, JavaScript looks for that property/method in the object itself. If it doesn't find it, it looks in the object's prototype, and this process continues up the prototype chain until it reaches the top-level object (Object.prototype).

// so, inheritance achieved usign prototypes is reffered as prototypal inheritance.

// method 1: using Object.create()
// This method takes an existing object and creates a new object with the specified object as its prototype.

const animal = {
  makeSound: function () {
    console.log('some sound')
  },
  breed: 'unknown',
}

const dog = Object.create(animal)
// dog.makeSound()
// console.log(dog.__proto__) // using "__proto__ we can get the object's prototype"
// console.log(dog.breed)

// method 2: using constructors or "new" keyword
function Animal2() {}
Animal2.prototype.makeSound = function () {
  console.log('Some generic sound')
}
Animal2.prototype.breed = 'unknown'

const cat = new Animal2()
cat.makeSound() // Outputs: Some generic sound
console.log(cat.__proto__)
