// Sum all the prime numbers up to and including the provided number.

// Pseudocodes:
// 1- create a function that takes a parameter as a number
// 2- loop through to get an array from the number
// 3- loop through from 2 to length of array
// 4- check all the items in array if divisible by other items except 1 and itself
// 5- if so, push the number to new array
// 6- sum all the numbers into the new array
// 7- print sum

function sumAllPrimes(number) {
	let array = [];
	let newArray = [2];

	for (let i = 1; i <= number; i++) {
		array.push(i);
	}

	for (let j = 2; j < array.length; j++) {
		let prime = false;

		for (let k = 1; k < j; k++) {
			if (array[j] % array[k] == 0) {
				prime = false;
				break;
			} else prime = true;
		}
		if (prime == true) newArray.push(array[j]);
	}

	let sum = newArray.reduce((total, current) => total + current);

	console.log(sum);
}

sumAllPrimes(7);

// Diagram:

// number	7
// array	[1,2,3,4,5,6,7]
// newArray	[2]
// prime	flase

//  j	k	array[j]	array[k]	prime	newArray
//  2	1	    3	        2	    true 	[2,3]
//  3	1	    4	        2	    false 	[2,3]
//  4	1	    5	        2	    true
//  4	2	    5	        3	    true
//  4	3	    5	        4	    true 	[2,3,5]
//  5	1	    6	        2	    false 	[2,3,5]
//  6	1	    7	        2	    true
//  6	2	    7	        3	    true
//  6	3	    7	        4	    true
//  6	4	    7	        5	    true
//  6	5	    7	        6	    true 	[2,3,5,7]

// sum => 17
