// function currying
// it is a technique which is used to make funcitons more reusable and create their specilized versions  by fixing some of its arguments.
// there are two methods of it: 1. using bind(), 2. using closures

// using bind()
function multiply(a, b, c) {
  console.log(a * b * c)
}

const curriedMultiply = multiply.bind(null, 2) // here we fized value of 'a' as '2'
// curriedMultiply(4, 6)

// using closures
function multiply2(x) {
  return function (y) {
    console.log(x * y)
  }
}

const curriedMultiply2 = multiply2(4)
// curriedMultiply2(3)
// curriedMultiply2(4)

// Q.1: implememnt a funciton for sum(a)(b)(c):

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c
//     }
//   }
// }
// console.log(sum(2)(3)(4))

// Q.2:

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       const ans =
//         operation === 'sum'
//           ? a + b
//           : operation === 'sub'
//           ? a - b
//           : operation === 'mul'
//           ? a * b
//           : operation === 'div'
//           ? a / b
//           : 'operation invalid'
//       return ans
//     }
//   }
// }
// const multiple = evaluate('mul')
// console.log(multiple(4)(3))

// Q. 3: infinite currying
// write a funciton to implememnt sum(a)(b)()()(n)()

// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b)
//     else {
//       return a
//     }
//   }
// }
// console.log(sum(3)(4)(9)())

// Q.4: difference between function curry and artial application:
// both are used to make specilized version of funciton but the difference is:
// in function curry the number of arguments passed and number of nested funcitons it contains is same, meaning each of the funciton into a funciton curry executes only one argument at a time, unlike partial application:

// partial applicaiton example:
function sum(a) {
  return function (b, c) {
    return a + b + c
  }
}

const s2 = sum(2)
console.log(s2(3, 4))

// Q.5: Real word application of function curring: DOM manipulation:
function updateText(id) {
  return function (content) {
    document.getElementById(id).innerText = content
  }
}

const update = updateText('h1')
update('updated text')
