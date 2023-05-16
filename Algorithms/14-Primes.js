// Sum all the prime numbers up to and including the provided number.

// Pseudocodes:
// 1- create a function that takes a parameter as a number
// 2- 	define an array for prime numbers
// 3- 	define a variable for sum with 0
// 4- 	loop 'i' through 2 to number(inclusive) 
// 5- 		loop 'j' through 2 to number(inclusive)
// 6- 			if 'i' is not divisible by 'j' then continue
// 7- 			if array doesn't include 'j' then push 'j' in it
// 8-			break the loop
// 9- 	sum all the prime number in the array
// 10-  return sum
// 11- call the function

function sumAllPrimes(number) {
	let primes = [];
	let sum = 0;

	for (let i = 2; i <= number; i++) {
		for (let j = 2; j <= number; j++) {
			if (i % j !== 0) {
				continue;
			}
			if (!primes.includes(j)) {
				primes.push(j);
			}
			break;
		}
	}
	sum = primes.reduce((total, current) => total + current);
	return sum;
}

console.log(sumAllPrimes(11));

// Diagram:

// number	7

//  i	j	i % j !== 0		!primes.includes(j)		primes.push(j)
//  2	2	  false	        		true			[2]
//  3	2	  true	        	    - 				-
//  3	3	  false	        	    true			[2,3]
//  4	2	  false	        	    false			-
//  5	2	  true  				-	 			-
//  5	3	  true	        	    - 				-
//  5	4	  true 	        		-			    -
//  5	5	  false	        	    true			[2,3,5]
//  6	2	  false		       	    false			-
//  7	2	  true					-				-	        
//  7	3	  true					-				-	        
//  7	4	  true					-				-	        
//  7	5	  true					-				-	        
//  7	6	  true					-				-	        
//  7	7	  false					true		    [2,3,5,7]	        
				 	        

// sum => 17


// Alternative solution
// ---------------------------------------------------------------------

// function sumAllPrimes(number) {
// 	let array = [];
// 	let newArray = [2];

// 	for (let i = 1; i <= number; i++) {
// 		array.push(i);
// 	}

// 	for (let j = 2; j < array.length; j++) {
// 		let prime = false;

// 		for (let k = 1; k < j; k++) {
// 			if (array[j] % array[k] == 0) {
// 				prime = false;
// 				break;
// 			} else prime = true;
// 		}
// 		if (prime == true) newArray.push(array[j]);
// 	}

// 	let sum = newArray.reduce((total, current) => total + current);

// 	console.log(sum);
// }

// sumAllPrimes(7);
