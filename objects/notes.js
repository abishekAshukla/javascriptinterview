// Note: https://www.youtube.com/watch?v=XnFIX3c7xoI&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=6

// Q. what are objects?
//  objects are used to store collections of key-value pairs, where each key is a string (or symbol) and each value can be of any data type, including other objects or functions.

// Q. 2: how to delete properties of na object:
// const obj1 = {
//   a: 234,
//   b: function () {
//     console.log('random')
//   },
// }
// console.log(obj1)
// delete obj1.b
// console.log(obj1)

// Q.3: how to iterrate thrught properties of an object:

for (key in obj1) {
  console.log(key, ' : ', obj1[key])
}

// Q.3: output based:
const a = {}

const b = { key: 2 }
const c = { key: 2 }

a[b] = 23
a[c] = 45

console.log(a[b])
// output: 45

// Q. 4:
const a = {
  name: 'abhi',
  sirname: 'shukla',
}

const r1 = JSON.stringify(a, ['name'])
console.log(r1)
// here, it will only stringify "name" i.e. mentioned properties form the object and not the whole object

// Q.5: normal funciton vs arrow funciton:

// const obj2 = {
//   n1: 34,
//   name: function () {
//     return this.n1
//   },
//   name2: () => {
//     return this.n1
//   },
// }

// console.log(obj2.name())
// console.log(obj2.name2())
// arrow funciton's "this" points to window object whereas normal funciton's "this" points to the object itself.

// Q.6: object destrucuring: it allows to extraxt specific properties of object and assign to variale in a more conveninet way

const obj = {
  name: 'abhi',
  last: 'shukl',
}

// tradiitonl way
// const last  = obj.last;
// console.log(last)

// using object destructuring
// const { last } = obj
// console.log(last)

// In destructuring if we have two variables of the same name then we can simple rename the destructed variable like this:
// const last = obj.last
// console.log(last)

// const { last: last2 } = obj
// console.log(last2)
// we renamed "last" as "last2" so that we dont get re-declared error

// destructuring of nested objects:
const obj23 = {
  name: 'abhi',
  last: 'shukl',
  address: {
    street: 'shriram',
    area: 'warje',
  },
}

const {
  address: { street },
} = obj23
console.log(street)

// Q.7: explain object referncing:
// object referencing refers to how variables that are assigned to objects actually hold references to those objects in memory, rather than storing the objects themselves directly.

// const obj1 = {
//   name: 'abhishek',
// }

// const obj2 = {
//   name: 'abhishek',
// }

// console.log(obj1 === obj2) // output is false, since both are them are storing different referces to different locations in memeory

// const obj3 = obj1
// console.log(obj3 === obj1) //output is true, since both are refering to same memory location.

// Q.8: using spread operator to clone objects

// const obj1 = {
//   name: 'abhishek',
// }

// const obj2 = {
//   name: 'abhishek',
// }

// const obj3 = { ...obj1 } // this does not passes to reference of obj1 but it passes the clone of the actual obj1
// console.log(obj3)
// obj1.name = 'vivek' // hence changes to obj1 will not affect obj3
// console.log(obj3)

// Q.8: shallow copy vs deep copy of objects
// Shallow copy: the newly created copied object still references to the original object from which it ws copied
// example:
// const obj1 = {
//   name: 'abhishek',
// }

// const obj2 = obj1
// obj1.name = 'vivek'
// console.log(obj1)
// console.log(obj2)

// here, changes performed to obj1 also affects obj2

// when we use spread operator to clone objects, it will still able to affect the original object's nested properties, hence it does not provides full proof solution
// example:
// const obj1 = {
//   name: 'abhishek',
//   address: {
//     street: 'koregaon',
//   },
// }

// const obj2 = { ...obj1 }
// obj1.name = 'vivek'
// obj1.address.street = 'warje'
// console.log(obj1)
// console.log(obj2)

// To make a deep copy of objects we can make use of following method:
// const obj2 = JSON.parse(JSON.stringify(obj1))
// this will create a completley new copy of the original object
