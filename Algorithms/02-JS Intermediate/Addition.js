// Write a program using JS that will add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5.

// Pseudocode:
// 1- Create a variable named 'total'
// 2- Loop through numbers from 200 until 2700
// 3- Check if value is divided by 3 or 5 but not both 3 and 5
// 4- If then add value to total

// Code:

let total = 0;
for (let i = 200; i <= 2700; i++) {
	if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
		total += i;
	}
}
console.log(total);

// Diagram:
// 1: i=200 -> Total:200
// 2: i++ ... i=201 -> Total:401
// 3: i++ ... i=202 -> Total:401
// ...
// 2500: i++ ... i=2700 -> Total:13467
// 2501: i++ ... 2701 is not smaller than 2700 -> Loop will stop
