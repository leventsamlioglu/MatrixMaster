// Write a program using JS that create Fibonacci array

// Pseudocode:
// 1- Create an array with values [0,1]
// 2- Declare a function (number)
// 3- Check if the number < 1, then return 'text'
// 4- Else loop through numbers from 1 to number-2
// 5- Inside the loop sum i(nth) + i+1(nth) and push the sum
// 6- Return array
// 7- Call the function

// Code:
let arr = [0, 1]

function fibonacci(number) {
    if (number < 1) {
        return ('Number must be greater then 1')

    } else {
        for (let i = 0; i < number-2; i++) {
            arr.push(arr[i] + arr[i + 1])
        }
        return arr
    }
}

console.log(fibonacci(10))


// Diagram:
// 1: i=0 -> Result: [0,1,1]
// 2: i=1 -> Result: [0,1,1,2]
// 3: i=2 -> Result: [0,1,1,2,3]
// ...
// 8: i=8 -> Result:[0,1,1,2,3,5,8,13,21,34]
