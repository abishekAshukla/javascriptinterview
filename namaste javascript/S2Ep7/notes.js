'use strict'

// "this" behaves differently in different scenarios.

// 1. "this" in global space
// "this" refers to global object i.e. in case of browsers it refers to window object and in case of nodejs it refers to global.
// console.log(this)

// 2. "this" inside a function (this substitution)
// if the value of "this" is undefined or null then it will be replaced by global object only in non-strict mode
// so if interviwer asks what is value of "this" inside function, tell it is undefined but in javascript there is something called "this substitution" which replaces "this" with glbal object in "non strict mode"

function x() {
  console.log(this)
}
// x()

// basically, inside a function "this" points to the immediate parent inwhich the function is present.
// example:
const user = {
  name: 'abhishek',
  childObj: {
    getDetails: function () {
      console.log(name)
    },
  },
}
user.childObj.getDetails()
// here it will give "name" is undefined because it is pointing to childObj and not "user" object

// 3. value of "this" depends on how function is called
// without any reference
// x() this will give undefined in strict mode

// with window reference
// window.x() // this will give window object even in the strict mode

// 4. "this" inside a object's method
// differnce between method and function: method is a function which is a part of an object.
// here "this" refers to the object
const obj = {
  a: 2,
  x: function () {
    console.log(this)
  },
}
// obj.x()

// 5. "this" inside arrow function
// here "this" do not have their own this binding, they retain value of the enclosing lexical context i.e. location where it is present
// basically location of the function in the code
// explain lexical emvironment here, both are related
// example:
const obj2 = {
  a: 2,
  x: () => {
    console.log(this)
  },
}
// obj2.x() // so, since obj2 is present in global space hence it will give global object

// 6. "this" inside nested arrow function
// const user = {
//   name: 'abhishek',
//   parentFunction: function () {
//     const childArrowFunction = () => console.log(this)
//     childArrowFunction()
//   },
// }
// user.parentFunction()

// basically, in arrow functions, "this" inherits its value from its parent function i.e. its outer lexical environment, so, value of "this" of parent funciton is equals to value "this" of child arrow function
// and if there is n parent function present, then "this" in arrow funciton will simpley point to window object.

// 7. "this" inside class
// so, in case of methods or functions(also contructors) inside classes, "this" refers to the instance of the class(object) for which the methods are called for.
// class user {
//   constructor(n) {
//     this.name = n
//   }

//   normal() {
//     console.log(this.name)
//   }
// }

// const u1 = new user('abhishek')
// u1.normal()

// 8. create a object calculator:
// const obj = {
//   read: function (a, b) {
//     this.a = a
//     this.b = b
//   },

//   getSum: function () {
//     return this.a + this.b
//   },
// }

// obj.read(4, 5)
// console.log(obj.getSum())

// 9. implement following: obj.add(5).mul(4).sub(3):

// const obj = {
//   total: 0,
//   add: function (num) {
//     this.total += num
//     return this
//   },
//   sub: function (num) {
//     this.total -= num
//     return this
//   },
//   mul: function (num) {
//     this.total *= num
//     return this
//   },
// }

// const cal1 = obj.add(5).mul(4).sub(3)
// console.log(cal1.total)
