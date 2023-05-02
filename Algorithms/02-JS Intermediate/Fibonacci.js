// Write a program using JS that create Fibonacci array

// Pseudocode:
// 1- Create an array with values [0,1]
// 2- Loop through numbers from 1 to 10
// 3- Inside the loop sum i(nth) + i+1(nth) and push the sum
// 4- Use console to print array

// Code:
let arr = [0,1]
for (let i = 0; i < 10; i++) {
 arr.push(arr[i]+arr[i+1])
}
console.log(arr)

// Diagram:
// 1: i=0 -> Result: [0,1,1]
// 2: i=1 -> Result: [0,1,1,2]
// 3: i=2 -> Result: [0,1,1,2,3]
// ...
// 10: i=10 -> Result:[0,1,1,2,3,5,8,13,21,34,55,89]
