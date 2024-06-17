// we will learn how to create polyfill of bind()

// Q. what is pollyfill
// A polyfill is essentially a piece of code (usually JavaScript) that provides the functionality of a feature or method in environments where that feature is not natively supported.

// When a new feature or method is introduced in JavaScript, older browsers or environments might not support it. In such cases, developers create polyfills to replicate the missing functionality using existing features that are supported in those environments.

// so we will creting mybind() which will behave exactly like bind()

// to make a fucntion accessible to all functions, we will use Function.prototype

let student1 = {
  firstname: 'Sushmita',
  lastName: 'Shukla',
}

function printName(hometown, state) {
  console.log(
    this.firstname + ' ' + this.lastName + ' ' + hometown + ' ' + state
  )
}

Function.prototype.mybind = function (...args) {
  // here, this = printName()
  // and args[0] = student1, here argus refres to arguments passed to mybind()
  //   argumentList = list of arguments passed except first one i.e. "student1"
  let functionCalled = this
  let argumentList = args.slice(1)
  return function (...args2) {
    // args2 refers to arguments passed directly from the function calling i.e. "maharashtra"
    // so we need to concetenate both args and args2
    functionCalled.apply(args[0], [...argumentList, ...args2])
  }
}

let printStu1 = printName.mybind(student1, 'pune')
printStu1('maharashtra')
