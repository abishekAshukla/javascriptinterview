// throttling is generally used for performace optimization by rate limiting the function calls.
// similar to debouncing.

let counter = 0
const getData = () => {
  console.log('data fetched', counter++)
}

const throttle = (fn, delay) => {
  let flag = true
  return function () {
    let context = this,
      args = arguments
    if (flag) {
      flag = false
      setTimeout(() => {
        fn.apply(context, args)
        flag = true
      }, delay)
    }
  }
}

const betterFunction = throttle(getData, 300)

// difference between debouncing and throttling
// debouncing:  no matter how mnay times the user calls the event, function will be executed only after specified delay once user stops calling the event.
// throttling: function will be executed only once in a given time interval, if function is called again within a delay, it will get ignored.
// example: form submission
