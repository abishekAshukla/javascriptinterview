// Topic: Promise APIs or promise combinators

/*
 1. promise.all()
 It is ised to handle multiple promises or API calls parallely
 It takes array of promises as input and returns an array containg their results.
 It waits for all the calls to finish, hence total time taken by it is equal to time taken by the largest call.
 promise.all() works differently if any of the promises gets rejected or cancelled.
 suppose there are 3 promises p1, p2, p3 to be executed parallely by promise.all(), if p1 gets failed then immeditely promise.all() will return the encountered error and will not execute other promises.

 chatgpt version:
 Promise.all()
Purpose: Used to concurrently handle multiple promises or API calls.
Input: Accepts an array of promises.
Output: Returns a promise that resolves with an array containing the results of all the resolved promises.
Behavior:
Concurrency: Executes all promises concurrently, waiting for all to finish.
Execution Time: Total time taken equals the time taken by the longest-running promise.
Handling Rejections: If any promise within Promise.all() fails (rejects or gets canceled):
Immediate Termination: Promise.all() immediately returns with the encountered error, disregarding the remaining promises in the array.

 */

/*
2. Promise.allSettled()
It is similar to Promise.all(), but if any of the promise gets failed still it waits for all the promises to et settled or executed.
It returns array containing the results, whether it has failed or succeded.
if p1 and p3 has been successfully executed and p2 hs been rejected then it will return array contaning outputs of p1 and p3 also error of p2.

*/

/*
3. Promise.race()
It returns the first settled promise. Takes array of promises as input.
Out of p1, p2, p3, if p2 ges executed or setled first then it will return the output tof p2.
While executing if any of the promise gets rejected, then it will return the error immeditely and not wait for other promises.

*/

/*
4. Promise.any()
It is similar to race but unlike race, it wont return immeditaly on encontering rejectio of any promise but it will wait for a successfull promise execution.
And if all of the promises gets rejected then it will return an array containg all the errors i.e. an aggregatedError array. Otherwise it will simply return the output of first successfull promise.

*/

const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('prom1 success')
  }, 3000)
})

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('prom2 failed')
  }, 1000)
})

const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('prom3 failed')
  }, 2000)
})

Promise.any([prom1, prom2, prom3])
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.error(error)
  })
