// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// In this task the function should support only natural values of n: integers up from 1.

function powerOfNumber(number, power) {
  if(power===0) return 1 // Check whether the power is 0 or not. If so return 1
  for (let i = 1; i < power; i++) {
    number *= number;
  }
  return number;
}

console.log(powerOfNumber(3, 2));
