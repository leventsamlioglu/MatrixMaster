// Write a function that, given a grid containing the numbers 1-9, determines whether it's a magic square.

// Pseudocode:

// 1- Create and empty array
// 2- Create a function and return a random number between 0-9
// 3- Create a function
// 4-   loop through 1 to array.length<9
// 5-   produce a random number by calling the related function
// 6-   check if array inclueds this number
// 7-   if not, push number to array
// 8-   return array
// 9- Create a function that print the square and count sum of diagonals
// 10- Create a function that print square type
// 11- Call first function to create a square
// 12- Call second function to print square
// 13- Call third function to print square type

let array = [];
let leftDiagonal, rightDiagonal, number;

function createSquare() {
	for (let i = 1; array.length < 9; i++) {
		number = randomNumber();
		if (!array.includes(number)) {
			array.push(number);
		}
	}
	leftDiagonal = array[0] + array[4] + array[8];
	rightDiagonal = array[2] + array[4] + array[6];
	return array;
}

function randomNumber() {
	let number = Math.floor(Math.random() * 9 + 1);
	return number;
}

function consoleArray() {
	console.log(array[0], array[1], array[2]);
	console.log(array[3], array[4], array[5]);
	console.log(array[6], array[7], array[8]);
}

function consoleSquareType() {
	(leftDiagonal || rightDiagonal) == 15
		? console.log("magic square!!!")
		: console.log("just an ordinary square...");
}

createSquare();
consoleArray();
consoleSquareType();

// Diagram:

//   array               array[0] + array[4] + array[8]  array[2] + array[4] + array[6]     result
// [4,1,6,9,3,5,2,7,8]                  15                             11               magic square
// [9,5,8,2,7,1,3,6,4]                  20                             18               ordinary sq.
