/*
Q1. waht is asynchronous function?
Asynchronous function always returns a promise.
Even if you return any other value instead of a promise still it will wrap that value in a promise and return it.
 */

const prom1 = new Promise((resolve, reject) => {
  //   setTimeout(() => console.log('promise executed'), 1000)
  resolve('promise resolved')
})

async function getData() {
  return prom1
}

const data = getData()
// // console.log(data)
// data.then((result) => console.log(result)) // this is how you can read the information from a promise

/*
Q. what is await?
Await keyword can only be used inside a async function.
It allows JS engine to wait for the promise to be resolved.

*/

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise2 resolved')
  }, 3000)
})

async function getData2() {
  const response = await prom2
  console.log(response)
  console.log('get data 2 finished')
}
// getData2()

// How it works?
// when we say that await allows to wait, it does not mean that the webpage or js engine will get freeze for that much time.
// When a async function gets into call stack it starts getting executed line by line, as soon as, await is encountered, that function gets suspended/removed from the call stack for that amount of time, afterpasing of that time the fucntion re-enters into the call stack, this time it starts executing from where it left last time.

const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise3 resolved')
  }, 6000)
})

async function getData3() {
  const response = await prom3
  console.log(response)

  const response2 = await prom2
  console.log(response2)
}
getData3()
// here, getData3() will get suspended from call stack on encountering first await statement for 6 seconds, after 6 seconds since prom2 also is resolved(3 sec) hence both responses will be printed.

// How fetch works: fetch() returns a promise which gives response body on getting resolved.
