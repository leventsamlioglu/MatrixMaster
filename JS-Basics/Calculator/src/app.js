import { display, currentOperandTextElement } from './display.mjs'
// Variables
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
)

// Initials

let array1 = []
let array2 = []
let operand = ''
let operandState = false
let equalState = false
currentOperandTextElement.innerHTML = 0
previousOperandTextElement.innerHTML = ''

function topScreen () {
  previousOperandTextElement.innerHTML =
    array2.join('') + operand + array1.join('')
}

// RESET

function reset () {
  array1 = []
  array2 = []
  operand = ''
  operandState = false
  equalState = false
  currentOperandTextElement.innerHTML = 0
  previousOperandTextElement.innerHTML = ''
}

// BUTTONS

// Number buttons

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (equalState) reset()
    array1.push(button.innerText)
    currentOperandTextElement.innerHTML = Number(array1.join(''))
  })
})

// Operation buttons

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (operandState) {
      return
    }

    // for (var i = 0; i < array1.length; i++) {
    //   array2.push(array1[i]);
    //   (array1.splice(i, 1));
    //   i--;
    // }

    array2 = [...array1]
    array1 = []

    operand = button.innerHTML
    operandState = true
    previousOperandTextElement.innerHTML = array2.join('') + operand
    currentOperandTextElement.innerHTML = 0
  })
})

// Equal button

equalsButton.addEventListener('click', () => {
  equalState = true

  switch (operand) {
    case '+': {
      display(Number(array2.join('')) + Number(array1.join('')))
      // display((Number(...array2) + Number(...array1)));
      topScreen()
      break
    }
    case '-': {
      display(Number(array2.join('')) - Number(array1.join('')))
      topScreen()
      break
    }
    case '*': {
      display(Number(array2.join('')) * Number(array1.join('')))
      topScreen()
      break
    }
    case '÷': {
      display(Number(array2.join('')) / Number(array1.join('')))
      topScreen()
      break
    }
    default:
  }
})

// Clear button

allClearButton.addEventListener('click', () => {
  reset()
  currentOperandTextElement.innerHTML = 0
  previousOperandTextElement.innerHTML = ''
})

// Delete button

deleteButton.addEventListener('click', () => {
  array1.pop()
  currentOperandTextElement.innerHTML = Number(array1.join(''))
})
