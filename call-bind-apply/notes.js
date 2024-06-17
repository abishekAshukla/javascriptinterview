// Note: whenever there is a question of "this" keyword, call-bind-apply are very useful.

// call() method is used to explicitely set the value of "this" inside a function or method.
// oftenly, it used for sharing or borrowing functions between different objects.

// const printFullName = () => {
//   console.log(this.firstName + ' ' + this.lastName)
// }

function printFullName(hometown) {
  console.log(this.firstName + ' ' + this.lastName + ' ' + hometown)
}

const person1 = {
  firstName: 'Abhishek',
  lastName: 'Shukla',
}

printFullName.call(person1, 'gorakhpur') // value of "this" in the function becomes person1 due to which person1 objects can have access to the function.

// Apply() method
// The apply() method in JavaScript is quite similar to the call() method, but it accepts arguments as an array or an array-like object instead of individually.
const person2 = {
  firstName: 'Vivek',
  lastName: 'Shukla',
}
printFullName.apply(person2, ['mumbai'])

// bind() method
// The key difference between bind() and call() is that bind() doesn't immediately invoke the function; instead, it generates a new copied function with the specified this context and initial arguments, which can be executed later. Conversely, call() immediately invokes the function with the specified this context and arguments.
const person3 = {
  firstName: 'Sushmita',
  lastName: 'Shukla',
}
const person3FullName = printFullName.bind(person3, 'pune')
person3FullName()

// Questions:

// 1:
function f() {
  console.log(this)
}

const user = {
  g: f.bind(null),
}
user.g() // output: global window object
// so since value of "this" is explicitely set as "null" and in javasscript there is something called "this substitution" which replaces value of "this" with global object if it is null or undefined inside a function

// 2: bind chaining
function f() {
  console.log(this.name)
}

const f1 = f.bind({ name: 'john' }).bind({ name: 'cena' })
f1() // output: "john"
// bind chaining does not exist, once a function is bind with an object it is always bounded to it.

// 3: call, bind , apply these functions does not works for arrow functions. Even if they are used with arrow functions, arrow functions will still work exactly same i.e. value of "this" will be retained from its external lexical environment.

// 4: polyfill for call():
Function.prototype.myCall = function (context = {}, ...args) {
  let functionCalled = this
  if (typeof functionCalled !== 'function')
    throw new Error('it should be a function only')

  context.fn = functionCalled
  context.fn(...args)
}

// 5: polyfill for apply:
Function.prototype.myApply = function (context = {}, args) {
  let functionCalled = this
  if (typeof functionCalled !== 'function')
    throw new Error('it should be a function only')

  context.fn = functionCalled
  context.fn(...args)
}

// 5. polyfill for bind():
Function.prototype.myBind = function (context = {}, ...args) {
  let functionCalled = this
  if (typeof functionCalled !== 'function')
    throw new Error('it should be a function only')

  return function (...args2) {
    context.fn = functionCalled
    context.fn(...args, ...args2)
  }
}
