// note: all of these works similar in case of 'let' and 'const' as well

// function statement or function declaration
function a() {
  console.log('a called')
}

// function expression
var b = function () {
  console.log('b called')
}

// the major difference between function statement and function expression is hoisting
// function statement are hoisted but function expression are not hoisted
// hoisting means that the function can be called before it is defined
// for example
// a(); // this will work
// b(); // this will not work
// in memory creation phase, var b is initilized with undefined as of other variables, its asscociated function is assigned to 'b' in code execution phase when that line of code is executed.

// anonyms function
// function without name are called anonyms function
// for example
// function () {
//   console.log('anonyms function')
// }
// this will give a syntax error, because anonyms functions do not have their own identity and they need to be assigned to a variable
// for example
var c = function () {
  console.log('anonyms function')
}

// named function expression
// function expression with name are called named function expression
// for example
var d = function xyz() {
  console.log('named function expression')
  //   here xyz() is presnt int eh scope of this funciton expression not in the global scope
  //   xyz() can be called inside this function expression
}
// xyz(); // this will give a reference error
// xyz is not defined because xyz is not defined in global scope, it is defined in the scope of function expression
// d(); // this will work

// first class functions
// "first-class functions" refers to the ability of functions to be treated as first-class citizens, just like any other data type. This means that functions can be assigned to variables, passed as arguments to other functions and can be returned from other functions as well.

// IIFE: immediately invoked function: defined end executed immediately

//   (function (x) {
//     console.log(x)
//   }
// )(3)

// Q. what are differences betwen normal function and arrow function:
// 1. syntax
// 2. if arrow function contains a one liner that "return" is not compulsory
// 3. "arguments" keyword is not accessible in arrow function
// 4. arrow functions are stored as undefined initially in variable enviroenmnt
// 5. "this" keyword behaves differenly

// How to use constructor in normal funciton and arrow funciton:
