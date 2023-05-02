// Write a program using JS that replace every letter of the word Program of the array with *  

// Pseudocode:
// 1- Create an array with ["Man", "I", "Love", "The", "Matrix", "Program"]
// 2- Define a string variable to add number of stars
// 2- Loop through array with for..of
// 3- Check if the item of the array is 'Program'
// 4- Then create a loop to count number of stars
// 5- Add a star to 'starCount'
// 6- Outside the for loop assign the star to array's index of item

// Code:

const arr = ["Man", "I", "Love", "The", "Matrix", "Program"];
let star = "";
for (const item of arr) {
  if (item === "Program") {
    for (let i = 1; i <= item.length; i++) {
      star += "*";
    }
    arr[arr.indexOf(item)] = star;
  }
}

console.log(arr);

// Diagram:
// 1: item:'Man' -> Result: ["Man", "I", "Love", "The", "Matrix", "Program"]
// 2: item='I -> Result: ["Man", "I", "Love", "The", "Matrix", "Program"]
// 3: item='Love' -> Result: ["Man", "I", "Love", "The", "Matrix", "Program"]
// 4: item='The' -> Result: ["Man", "I", "Love", "The", "Matrix", "Program"]
// 5: item='Matrix' -> Result: ["Man", "I", "Love", "The", "Matrix", "Program"]
// 6: item='Program' -> Result: ["Man", "I", "Love", "The", "Matrix", "*******"]
// Loop end
