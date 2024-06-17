document.getElementById('outer').addEventListener(
  'click',
  function () {
    console.log('Outer div clicked')
  },
  true
)

document.getElementById('inner').addEventListener(
  'click',
  function () {
    console.log('Inner div clicked')
    event.stopPropagation()
  },
  true
)

document.getElementById('btn').addEventListener('click', function (event) {
  console.log('Button clicked')
  //   event.stopPropagation() // Stops event from bubbling up
})

// Event bubbling:
// Event bubbling is a concept in JavaScript where an event triggered on a child element "bubbles" up through its ancestors in the DOM tree, triggering any event handlers attached to those ancestors.
// Steps:
// Event Triggering: When an event occurs on a DOM element, such as a click on a button, the browser detects this event.

// Event Propagation: After the event is detected, the browser checks if there are any event handlers attached to the element where the event originated. If there are, those event handlers are executed.

// Bubbling Up: Once the event handlers on the originating element are executed, the event "bubbles up" through the DOM tree, triggering any event handlers attached to the ancestor elements of the originating element, all the way up to the root of the document.

// Propagation Stopping: At any point during the bubbling phase, if an event handler calls the stopPropagation() method on the event object, the event will stop propagating further. This means that event handlers attached to ancestor elements higher up in the DOM tree will not be executed.
