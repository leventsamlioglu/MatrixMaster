// Write a program using JS that create Fibonacci array and return the list item

// Pseudocode:
// 1- Create an array with values [1,1]
// 2- Declare a function which takes number as parameter
// 3- Check if the number is smaller then 1, else
// 2- Loop through numbers from 0 to number-2 (Because we've just declared arr with two items)
// 3- Inside the loop push i(th) + i+1(th) item of array to the array
// 4- Return last item of array

// Code:
let arr = [1, 1];

function fibonacci(number) {
	if (number < 1) {
		return "Number must be greater then 1";
	} else {
		for (let i = 0; i < number - 2; i++) {
			arr.push(arr[i] + arr[i + 1]);
		}
		return arr[number - 1];
	}
}

console.log(fibonacci(7));

// i	number	    arr	            arr[i]	    arr[i+1]	arr[i] + arr[i+1]	    arr
// 0	  7	        [1,1]	          1	           1	           2	            [1,1,2]
// 1	  7	        [1,1,2]	          1	           2	           3	            [1,1,2,3]
// 2	  7	        [1,1,2,3]	      2	           3	           5	            [1,1,2,3,5]
// 3	  7	        [1,1,2,3,5]	      3	           5	           8	            [1,1,2,3,5,8]
// 4	  7	        [1,1,2,3,5,8]	  5	           8	          13	            [1,1,2,3,5,8,13]

// Result = 13
