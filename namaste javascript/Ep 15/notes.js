// the JavaScript engine is responsible for executing JavaScript code, but it also has access to various web APIs and features provided by the browser. These features include functions like setTimeout, DOM APIs for manipulating the Document Object Model (DOM), local storage, console, fetch() and more. These web APIs are associated with the global window object in the browser, and JavaScript can interact with them to perform tasks like setting timers with setTimeout, manipulating web page content through the DOM, and storing data in local storage.
// all these features of browser are available thorugh the window object.

// callback queue
// when a callback function gets triggered on completion of a event, it is pushed to the callback queue.
// the callback queue is a data structure that holds all the callback functions that are ready to be executed. Each callback function is associated with a task. When the stack is empty, the event loop takes the first callback function out of the queue and pushes it to the call stack, which effectively runs the callback function. This process is repeated as long as the callback queue is not empty.
// it involves callback functions which are associated with setTimeout, setInterval, DOM event listeners, etc.

// microtask queue or job queue
// microtask queue is similar to callback queue, but it has higher priority than callback queue.
// it invloves task like callback functions associated with promises, etc.

// event loop
// event loop is a programming paradigm or model which helps to explain code execution in javascript.
// it continously monitors callstack, callback queue and microtask queue.
// Here's the typical order of execution in the event loop:
// Execute any synchronous code in the call stack.
// Check the microtask queue and execute any pending microtasks.
// Check the callback queue and execute any pending callbacks.
// Repeat the process until both the microtask queue and callback queue are empty.

// Q.1 :
// let a = true

// setTimeout(() => {
//   a = false
// }, 2000)

// while (a) {
//   console.log('hello')
// }

// here it wont stop runnning even after 2 seconds because callback will never get into the the callstack ot be get executed.

// Q.2:

let a = true

setTimeout(() => {
  a = false
}, 2000)

setInterval(() => {
  if (a) console.log('hello')
}, 200)
// still after 2 seconds our program will not stop it will only stop printing.

// Q. 3: how to stop setInterval after specified delay

const id = setInterval(() => {
  console.log('hello')
}, 200)

setTimeout(() => {
  clearInterval(id)
}, 2000)
