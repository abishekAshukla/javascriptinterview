// Q. What is state?
// state is an object which represents current condition of a component, which can be modified to manage dynamic data.
// States are manged using useState hook
// useState hook allows to create states and also provide method to update the states.

// Q. what are props?
// Props are used to pass data from a parent component to a child component.
// Props are immutable, meaning that once they are set by the parent, their value cannot be changed by the child component. This ensures a unidirectional flow of data in React.

// Q. what are hooks?
// hooks are functions which are used to to effectively manage states(useState), side-effects(useEffect) and other features in react.

// Q. what is useEffet?
// It is used to manage background tasks such as data fetching and DOM manipulation.
// We can specify some dependencies, and effects and when those dependencies gets updated the effects will be triggered.

// Q. what is useRef?
// When a state is updated in a React component, it triggers a re-render of the component.

// In contrast, when you use a ref created with useRef, updating its current property does not trigger a re-render. useRef allows you to hold mutable values that persist across renders without causing the component to re-render.

// So, if your goal is to manage a value that doesn't need to trigger a re-render when it changes, and you dont need to update the UI based on that change, using useRef can be a suitable choice. This is often useful when dealing with imperative operations like accessing and manipulating DOM elements, storing and retrieving measurements, or holding values that don't affect the UI directly.
// its commonly used for accessing and manipulating DOM elements.
// useState can also be used to access DOM elements but since we need to make sure that it doesn't cause a re-render and remain consisitent across renders hence useRef is a suitable choice.

// Q. what is Context and useContext?
// explain prop drilling first
// Contexts are used to make states available across application and components to preven tfrom prop drilling.
// explain createContext and useContext
// refer useContextNotes.js for code

// Q. what is useMemo?
