// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// Pseudocode:

// 1- declare a function which takes parameter as an array
// 2- declare variables for each parameter's item
// 3- check and sort variables
// 4- loop through range
// 5- sum numbers between range
// 6- return sum

// Code:

function sumAll(arr) {
	let sum = 0;
	let [minRange, maxRange] = arr; 

	if (minRange > maxRange) {
		[minRange, maxRange] = [maxRange, minRange]; // Swap the variables
	}
	for (let i = minRange; i <= maxRange; i++) {
		sum += i;
	}

	return sum;
}

console.log(sumAll([6, 4]));

// Diagram:

//        i	    arr	    sum	    minRange	maxRange	sum+=i
// 1:           [6,4]	 0	        6	        4	
// 2:           [6,4]	 0	        4	        6	
// 3:     4	    [6,4]	 0	        4	        6	      4
// 4:     5	    [6,4]	 4	        4	        6	      9
// 5:     6	    [6,4]	 9	        4	        6	      15