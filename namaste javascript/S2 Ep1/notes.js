// Callback hell, also known as the "pyramid of doom," refers to a situation in asynchronous JavaScript programming where multiple nested callbacks create complex and hard-to-read code. It occurs when asynchronous operations are chained together, leading to deeply nested callback functions.

// example:
asyncOperation1(function (response1) {
  asyncOperation2(response1, function (response2) {
    asyncOperation3(response2, function (response3) {
      // and so on...
    })
  })
})

// Using modern asynchronous patterns like Promises or async/await helps to write more readable and maintainable code by avoiding deep nesting and allowing a more linear flow.
// example:
asyncOperation1()
  .then((response1) => asyncOperation2(response1))
  .then((response2) => asyncOperation3(response2))
  .then((response3) => {
    // Handle final response
  })
  .catch((error) => {
    // Handle errors
  })
