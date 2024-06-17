// Spread operator
// The spread operator in JavaScript is represented by three dots (...). It allows an iterable (like an array, string, or object) to be expanded or spread into individual elements.

// Uses:
// 1. adding elements into array
const numbers = [1, 2, 3]
const moreNumbers = [...numbers, 4, 5]
console.log(moreNumbers)

// 2. adding properties into object
const person = { name: 'John', age: 30 }
const updatedPerson = { ...person, age: 31, city: 'New York' }
console.log(updatedPerson)

// 3. copying arrays
const originalArray = [1, 2, 3]
const copiedArray = [...originalArray]

// 4. concatenating arrays
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const mergedArray = [...arr1, ...arr2]

// Rest operator: The rest operator in JavaScript, when used in the context of function parameters, is also represented by three dots (...). It allows a function to accept an indefinite number of arguments and collects them into an array.
// in certain cases, we dont know the exact number of arguments passes to the function, in that case, rest operator is useful.
// example:
function displayInfo(name, age, ...hobbies) {
  console.log(`Name: ${name}`)
  console.log(`Age: ${age}`)
  console.log(`Hobbies: ${hobbies.join(', ')}`)
}

// it is often used to collect remaining elements of an array
const numbers2 = [1, 2, 3, 4, 5]
const [first, second, ...rest] = numbers2

console.log(first) // Output: 1
console.log(second) // Output: 2
console.log(rest) // Output: [3, 4, 5]
