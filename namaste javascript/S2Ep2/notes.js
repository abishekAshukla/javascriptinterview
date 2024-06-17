// Note: Solve interview quesitons from https://www.youtube.com/watch?v=HaJdoFp2OEc

// Contrarily, asynchronous operations allow tasks to be executed independently without waiting for each other to finish. JavaScript is single-threaded, so it uses mechanisms like callbacks, promises, and async/await to handle asynchronous tasks effectively.
// promises are used to prevent from callback hell

// promise is an object which represenst success or failure of an asynchronous operation.

// promise creation
const promise1 = new Promise(function (resolve, reject) {
  // do async tasks
  let error = true
  setTimeout(function () {
    console.log('async task performed')
    error ? resolve({ name: 'abhi', phn: '932546' }) : reject('Error occured')
  }, 1000)
})

// promise handling
// promise1
//   .then(function (data) {
//     console.log(data)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })

// promise provides two functions i.e. resolve() and reject()
// 1. resolve(): It represents successfull completion f the asynchronous operations. When resolve() is called, the promise transitions from the pending state to the fulfilled state, and any attached .then() handlers will receive the resolved value.
// 2. reject(): It represenst failure of the async operation. When reject() is called, the promise transitions from the pending state to the rejected state, and any attached .catch() or subsequent .then() handlers with error handling will capture the rejected value.

/*
Promise chaining:

Promise chaining is a technique in JavaScript that allows you to execute asynchronous operations in a sequence. It involves connecting multiple promises together, one after the other, to perform a series of asynchronous tasks in a more organized and readable manner.

The basic idea is that each asynchronous operation returns a promise, and you can chain .then() calls to these promises to specify what to do with the resolved value or to perform additional asynchronous tasks.

example:
new Promise(function (resolve, reject) {
  resolve('a')
}).then(function (data) {
  console.log(data)
  new Promise(function (resolve, reject) {
    resolve('b')
  }).then(function (data) {
    console.log(data)
    new Promise(function (resolve, reject) {
      resolve('c')
    }).then(function (data) {
      console.log(data)
    })
  })
})

example 2:
// Asynchronous operation 1
function asyncOperation1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Result of async operation 1');
    }, 1000);
  });
}

// Asynchronous operation 2
function asyncOperation2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Result of async operation 2');
    }, 500);
  });
}

// Chain promises together
asyncOperation1()
  .then(result => {
    console.log(result);
    return asyncOperation2(); // Return another promise
  })
  .then(result => {
    console.log(result);
    // Continue chaining if needed
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });

*/

// you can also handle promises using async/await instead of catch/then
async function handlePromise() {
  try {
    const response = await promise1
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
handlePromise()

// Note:
// Synchronous code present inside proise initilization gets executed immediately when promise is initilized.
// Example:

console.log('a')

new Promise(function (resolve, reject) {
  console.log('b')
  resolve('c')
}).then(function (data) {
  console.log(data)
})

console.log('d')
// output: a b d c
