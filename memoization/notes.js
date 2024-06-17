// memoization is an optimization technique that can be used to reduce time consuming calculations by saving previous input to something called cache and returning the result from it.

const calcSum = (n) => {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += i
  }
  return sum
}

const memoize = (func) => {
  let cache = {}
  return function (n) {
    if (n in cache) {
      console.log('present in cache')
      return cache[n]
    } else {
      console.log('non present in cache')
      const result = func(n)
      cache[n] = result
      console.log(cache)
      return result
    }
  }
}

const betterCalum = memoize(calcSum)

console.time()
console.log(betterCalum(7))
console.timeEnd()

console.time()
console.log(betterCalum(7))
console.timeEnd()
