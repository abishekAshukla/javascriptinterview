// explain map, filter and reduce function

// Q. Map():
// map is used to tranform each elements of a array, it returns an array.
// example:
numbers = [2, 3, 4]
function double(num, i, arr) {
  return 2 * num
}
console.log(numbers.map(double))
// here, "i" points to current index of the passed array and "arr" points to the actual passed array

// Plyfill for map():
Array.prototype.myMap = function (func) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result.push(func(this[i], i, this))
  }
  return result
}

// Q. filter():
// filter is used to filterout a elements of any array based on some condiiton
// The filter function creates a new array with elements that pass a certain condition specified by a callback function.
// example:
const numbers = [1, 2, 3, 4, 5, 6]

const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers) // [2, 4, 6]

// Polyfill for filter():
Array.prototype.myFilter = function (func) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) result.push(this[i])
  }
  return result
}

// Q. reduce():
// reduce: The reduce function iterates through an array and accumulates a single value by applying a function that processes each element. It takes an accumulator and the current value as arguments.

arr = [2, 3, 4]
sum = arr.reduce(function (acc, curr) {
  acc = acc + curr
  return acc
}, 0)
console.log(sum)

// here, 0 represents initial value of accumulator

// Polyfill for reduce():
Array.prototype.myReduce = function (func, iniVal) {
  let result
  iniVal ? (result = iniVal) : (result = this[0])
  for (let i = 0; i < this.length; i++) {
    let r1 = func(result, this[i])
    result = r1
  }
  return result
}

// Q. explain diference between map() and forEach():
// map() return a new array whereas forEach() is used to make changes in the original array it doesn't returns anything

const arr1 = [2, 3, 4]
arr1.forEach((elem, i) => {
  arr1[i] = elem + 2
})
console.log(arr1)

const arr2 = arr1.map((elem) => {
  return elem + 2
})
