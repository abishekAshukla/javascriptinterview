// Debouncing:
//it is a programming practice which is used to reduce the frequency of occurence of time consuming tasks like scroll events and search bar.
// It is used for performance optimization in web pages.

// Imagine you have a function that gets triggered frequently, like on each keystroke in an input field. Without debouncing, this function would execute every time the event occurs, potentially causing performance issues.
// Debouncing involves adding a delay before allowing the function to run. If the event occurs multiple times within the specified delay, the function will only run once after the delay has passed. This prevents the function from being called too frequently and improves performance.

// no matter how mnay times the user calls the event, function will be executed only after specified delay once user stops calling the event.

let counter = 0
const getData = () => {
  console.log('data fetched', counter++)
}

const debounce = (fn, delay) => {
  let timer
  return function () {
    let context = this,
      args = arguments
    clearTimeout(timer) // it first clears previous settimeout callback(timer) then initiates the newer one.
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

const betterFunction = debounce(getData, 300)
