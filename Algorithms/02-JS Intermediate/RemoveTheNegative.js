// Write a program using JS that removes negative values of an array

// Pseudocode:
// 1- Create an array with negative values
// 2- Loop through array
// 3- Check if the value < 0
// 4- Then remove the value
// 4- Use console to print array

// Code:
let arr = [1, -2, 4, 1, -2];
for (let i = 0; i < arr.length; i++) {
  arr[i] < 0 ? arr.splice(i, 1) : arr;
}
console.log(arr);

// Diagram:
// 1: i=0 -> Result: [1,-2,4,1,-2]
// 2: i=1 -> Result: [1,4,1,-2]
// 3: i=2 -> Result: [1,4,1,-2]
// 4: i=3 -> Result: [1,4,1]
// Loop end
