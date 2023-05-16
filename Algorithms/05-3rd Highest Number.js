// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).

// Pseudocode:
// 1- Declare a function which has an array as parameter
// 2- Define first,second and third as variable with 0 initial value
// 3- Loop through 0 to array length
// 4- Inside the loop, check if input[i] > first
// 5- If so, third = second, second = first, first = array[i]
// 6- After the first check, check if else array[i] > second
// 7- If so, third = second, second = array[i]
// 8- After the second check, check if else array[i] > third
// 9- If so, third = array[i]
// 10- Return third
// 11- Use console to print function result

function thirdHighest(array) {
  let first = 0;
  let second = 0;
  let third = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > first) {
      third = second;
      second = first;
      first = array[i];
    } else if (array[i] > second) {
      third = second;
      second = array[i];
    } else if (array[i] > third) {
      third = array[i];
    }
  }
  return third;
}
console.log(thirdHighest([2, 5, 3, 1, 4]));

// Diagram:

// arr = [2, 5, 3, 1, 4]
// first, second, third = 0

// i 	arr[i]	arr[i] > first	arr[i] > second	  arr[i] > third	first	 second	  third
// 0	  2	          true 	            -	               -	        2	     0	      0
// 1	  5	          true 	            -	               -	        5	     2	      0
// 2	  3	          false 	        true 	             -	        5	     3	      2
// 3	  1	          false 	        false 	         false 	      5	     3	      2
// 4	  4	          false 	        true 	             -        	5	     4      	3

// Result: 3
