// Write a program using JS that replace every letter of the word Program of the array with *

// Pseudocode:
// 1- Create an array with ["Man", "I", "Love", "The", "Matrix", "Program"]
// 2- Create a function
// 3- Loop through array with for..of
// 4- Define a string variable to add number of stars
// 5- Check if the item of the array is 'Program'
// 6- Then create a loop to count number of stars
// 7- Add a star to 'starCount'
// 8- Outside the for loop assign the star to array's index of item
// 9- Return the array
// 10- Call the function

// Code:

const arr = ["Man", "The", "Love", "The", "Matrix", "Program"];

function checkWord(word) {
	for (const item of arr) {
		let star = "";
		if (item === word) {
			for (let i = 1; i <= item.length; i++) {
				star += "*";
			}
			arr[arr.indexOf(item)] = star;
		}
	}
	return arr;
}

console.log(checkWord("Program"));

// Diagram:
// 1: item:'Man' -> Result: ["Man", "I", "Love", "The", "Matrix", "Program"]
// 2: item='I -> Result: ["Man", "I", "Love", "The", "Matrix", "Program"]
// 3: item='Love' -> Result: ["Man", "I", "Love", "The", "Matrix", "Program"]
// 4: item='The' -> Result: ["Man", "I", "Love", "The", "Matrix", "Program"]
// 5: item='Matrix' -> Result: ["Man", "I", "Love", "The", "Matrix", "Program"]
// 6: item='Program' -> Result: ["Man", "I", "Love", "The", "Matrix", "*******"]
// Loop end
