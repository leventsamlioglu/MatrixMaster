let phrase = "Hello"

if (true) { // the condition is always true so execute the below code
  let user = "John";
  function sayHi() {
    console.log(`${phrase}, ${user}`) // pharse -> global variable // user -> local variable
  }
}

sayHi() // Hello, John