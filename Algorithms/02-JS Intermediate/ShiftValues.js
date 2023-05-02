// Write a program using JS that will shift each number by one to the front.

// Pseudocode:
// 1- Create an array with items -> [2,1,6,4,-7]
// 2- Loop through array until length of the array
// 3- Inside the loop, splice the i(nth) item of array and unshift this item into array
// 3- Use console to print array

// Code:

const arr = [2, 1, 6, 4, -7];
for (let i = 0; i < arr.length; i++) {
  arr.unshift(arr.splice(i, 1)[0]);
}
console.log(arr)

// Diagram:
// 1: i=0 -> spliced item : 2 -> arr = [2,1,6,4,-7]
// 2: i=1 -> spliced item : 1 -> arr = [1,2,6,4,-7]
// 3: i=2 -> spliced item : 6 -> arr = [1,2,6,4,-7]
// 4: i=3 -> spliced item : 4 -> arr = [4,2,1,6,-7]
// 5: i=4 -> spliced item : -7 -> arr = [-7,4,6,1,2]


