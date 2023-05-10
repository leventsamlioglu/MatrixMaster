// We want to play a "Game of 3s". Here's how you play it:

// First, you pick a random number. Then, repeatedly do the following:

// If the number is divisible by 3, divide it by 3.
// If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
// The game stops when you reach "1".


// Pseudocode:
// 1- Create a function that takes a parameter as a number
// 2- Loop through from the number to 1
// 3- Check if item is divisible by 3
// 4- If so, print number and 0
// 5- Else if number + 1 is divisible by 3, print number and 1
// 6- Else if number -1 is divisible by 3, print number and -1


// Code:

function totalNumber(number) {
	for (let i = number; i >= 1; i--) {
		if (i === 1) {
			console.log(i);
		} else if (i % 3 === 0) {
			console.log(i + " 0");
		} else if ((i + 1) % 3 === 0) {
			console.log(i + " 1");
		} else if ((i - 1) % 3 === 0) {
			console.log(i + " -1");
		}
	}
}

totalNumber(10);


// Diagram:

//  i	i === 1     i % 3 === 0	    (i + 1) % 3 === 0	(i - 1) % 3 === 0	Result
// 10	false 	    false 	        false 	            true 	            10  -1
//  9	false 	    true 	        false 	            false 	            9  0
//  8	false 	    false 	        true 	            false 	            8 +1
//  7	false 	    false 	        false 	            true 	            7  -1
//  6	false 	    true 	        false 	            false 	            6  0
//  5	false 	    false 	        true 	            false 	            5 +1
//  4	false 	    false 	        false 	            true 	            4  -1
//  3	false 	    true 	        false 	            false 	            3  0
//  2	false 	    false 	        true 	            false 	            2 +1
//  1	true 	    false 	        false 	            false 	            1

