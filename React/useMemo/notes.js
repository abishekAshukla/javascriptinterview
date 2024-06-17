// In React, the useMemo hook is used for memoization.
// Memoization is an optimization technique that helps to avoid unnecessary computations by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

// Working:
// On the initial render of component or when any of the specified dependencies change, the function inside useMemo is executed.
// The return value of the function is memoized (cached).
// On subsequent renders when specified dependencies do not change, the cached result is returned without re-executing the function.

// Example: https://www.youtube.com/watch?v=THL1OPn72vo

// import { useState, useMemo } from 'react'

// function App() {
//   const [number, setNumber] = useState(0)
//   const [darkTheme, setDarkTheme] = useState(false)
//   const doubleNumber = useMemo(() => {
//     return slowFunction(number)
//   }, [number])

//   return (
//     <div className="App">
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//       />
//       <button
//         style={{ backgroundColor: darkTheme ? 'black' : 'white' }}
//         onClick={() => setDarkTheme(!darkTheme)}
//       >
//         Change theme
//       </button>
//       <span>{doubleNumber}</span>
//     </div>
//   )
// }

// function slowFunction(num) {
//   for (let i = 0; i < 999999999; i++) {}
//   return num * 2
// }

// export default App
