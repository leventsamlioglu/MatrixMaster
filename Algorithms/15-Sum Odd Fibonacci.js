// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// Pseudocode:
// 1- Create an array with values [1,1]
// 2- Declare a function which takes number as parameter
// 3- Check if the number is smaller then 1, else
// 4- Loop through numbers from 0 to i(th) + i+1(th) < number 
// 5- Inside the loop push i(th) + i+1(th) item of array to the array
// 6- Use reduce method to sum odd items
// 7- Return the sum

// Code:

let arr = [1, 1];

function sumOddFibonacci(number) {
	if (number < 1) {
		return "Number must be greater then 1";
	} else {
		for (let i = 0; arr[i]+arr[i+1]<=number; i++) {
			arr.push(arr[i] + arr[i + 1]);
		}
		arr = arr
			.reduce((total, current) =>
				current % 2 !== 0 ? total + current : total
			);
	}
    return console.log(arr);
}

sumOddFibonacci(13);

// i	number	    arr	            arr[i]	    arr[i+1]	arr[i] + arr[i+1]	    arr
// 0	  10        [1,1]	          1	           1	           2	            [1,1,2]
// 1	  10	    [1,1,2]	          1	           2	           3	            [1,1,2,3]
// 2	  10	    [1,1,2,3]	      2	           3	           5	            [1,1,2,3,5]
// 3	  10        [1,1,2,3,5]	      3	           5	           8	            [1,1,2,3,5,8]
// arr = 1 + 1 + 3 + 5 => 10  

// -----------------------------------------------------------------------------------------------

// Alternative code:

// let arr = [1, 1];

// function sumOddFibonacci(arrayLength, limit) {
// 	if (arrayLength < 1) {
// 		return "Number must be greater then 1";
// 	} else {
// 		for (let i = 0; i < arrayLength - 2; i++) {
// 			arr.push(arr[i] + arr[i + 1]);
// 		}
// 		arr = arr
// 			.filter((value) => value < limit)
// 			.reduce((total, current) =>
// 				current % 2 !== 0 ? total + current : total
// 			);
// 		console.log(arr) ;
// 	}
// }

// sumOddFibonacci(7, 5);