import React, { createContext, useContext, useState } from 'react'

// creating context
const randomContext = createContext()

// defining accessibility of the context
const RandomProvider = ({ children }) => {
  const [name, setName] = useState('shukla')

  return (
    <randomContext.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
    </randomContext.Provider>
  )
}

// useContext is used to receive value provided to context, following hook can be exported anywhere so that useContext doesnt have to be used again and again
export const RandomState = () => {
  return useContext(randomContext)
}

export default RandomProvider
