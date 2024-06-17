// calbback functions are functions which are passed as argument to another function, it is used to ensure that certain code is executed only after another code has finished executing
// for example:
const myButton = document.getElementById('myButton')
function handleClick(event) {
  console.log('Button was clicked!')
}
myButton.addEventListener('click', handleClick)
// we are ensuring that the handleClick function is only executed after the button is clicked

// callback functions also form closures with its lexical scope, for example:
function attacheventListeners() {
  let count = 0
  document
    .getElementById('myButton')
    .addEventListener('click', function handleClick() {
      count++
      console.log(count)
    })
}
attacheventListeners()
// the count variable is in the lexical scope of the handleClick function and it is accessible to it even if the callback function is executed outside of its original defined location.

//  Q. how to achieve asynchrous programming using callbacks:

console.log('a')

function fetchData(cb) {
  setTimeout(() => {
    const data = 'hello'
    cb(data)
  }, 2000)
}
// following funcition simulates a task which takes large amunt time to be executed

function getData(data) {
  console.log(data)
}
fetchData(getData)

console.log('b')

// since we dont want our code to get blocked for large amout of time we make use of callbacks to execute large time cosuming operations.
