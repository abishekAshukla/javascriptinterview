// What is module pattern?
// The Module Pattern in JavaScript is a design pattern used to encapsulate and organize code into smaller, reusable modules.
// The Module Pattern promotes encapsulation, allowing you to hide implementation details and expose only the necessary information to the user.
// common way to implement this is by using IIFE

var myModule = (function () {
  // Private variables and functions
  var privateVariable = 'I am private'

  function privateFunction() {
    console.log('This is a private function')
  }

  // Public interface
  return {
    publicVariable: 'I am public',
    publicFunction: function () {
      console.log('This is a public function')
    },
    getPrivateVariable: function () {
      return privateVariable
    },
  }
})()

console.log(myModule.publicVariable)
myModule.publicFunction()
console.log(myModule.getPrivateVariable())
