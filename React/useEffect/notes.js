// In React.js, components go through a lifecycle that consists of four main phases: Initialization, Mounting, Updating, and Unmounting.
// 1. Initilization:
// This phase involves setting up the initial state and props of the component.
// 2. Mounting:
// Componenet gets insrted into DOM and gets visible o the screen.
// 3. Updation:
// This phase is triggered when the component is re-rendered as a result of changes in state or props.
// 4. Unmounting:
// This phase occurs when the component is being removed from the DOM.

// UseEffect hook is used to perform tasks during these phases i.e. during compoenent's lifecycle.

useEffect(() => {
  // following will be executed when component mounts
  console.log('component mount')

  // fllowing will be executed when componenet unmounts
  return () => {
    console.log('component unmount')
  }
}, [])

useEffect(() => {
  // following will be executed when "toggle" state gets updated.
  console.log('toggle mounted')

  return () => {
    console.log('toggle unmounted')
  }
}, [toggle])
// here, when "toggle" state gets updated whole compoenent gets re-rendered(unmount then mount), hence when "toggle" is changed first unmounted function is executed then mounted one.
