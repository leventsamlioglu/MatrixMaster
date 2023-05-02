// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

const calculator = {
  // Read the numbers
  read() {
    this.number1 = prompt("Choose the first number:", 0);
    this.number2 = prompt("Choose the second number:", 0);
  },

  // Sum the numbers (+ operator convert string to number)
  sum() {
    return +this.number1 + +this.number2;
  },

  // Multiply the numbers
  mul() {
    return +this.number1 * +this.number2;
  },
};

calculator.read();
alert(`Sum of the numbers = ${calculator.sum()}`);
alert(`Multiply of the numbers = ${calculator.mul()}`);


