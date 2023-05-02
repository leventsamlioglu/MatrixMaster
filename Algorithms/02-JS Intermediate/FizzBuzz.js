// Write a program using JS that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".

// Pseudocode:
// 1- Loop through numbers from 1 to 135
// 2- Check if the number is divided by 3 and 5 print 'FizBuzz'
// 3- Else if the number is divided by 3 print 'Fizz'
// 4- Else if the number is divided by 5 print 'Buzz'

// Code:

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(i, "Fizz");
  } else if (i % 5 === 0) {
    console.log(i, "Buzz");
  } else {
    console.log(i);
  }
}

// Diagram:
// 1: i=1 -> Result:1
// 2: i=2 -> Result:2
// 3: i=3 -> Result:Fizz
// 4: i=4 -> Result:4
// 5: i=5 -> Result:Buzz
// ...
// 15: i=15 -> Result:FizzBuzz
