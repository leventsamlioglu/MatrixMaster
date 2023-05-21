// DISPLAY

export const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
)

export function display (result) {
  currentOperandTextElement.innerHTML = result.toFixed(2)
}
