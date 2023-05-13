// While the array is not sorted, the code would do the following steps:

// 1- Take each pair of 2 adjacent numbers and compare them.

// 2- If their order is not correct, switch them.

// Pseudocode:

// 1- Create a function that takes an array as parameter
// 2- Declare a variable for swapping
// 3- Create a do..while loop
// 4-   inside the loop, loop through from 0 to length of array - 1
// 5-   check if arr[i]>arr[i+1]
// 6-   if so swap the items
// 7-   change swap value to true
// 8- Return true
// 9- Call the function to print result

function bubleSort(arr) {
	let swapped;

	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				swapped = true;
			}
		}
	} while (swapped);
	return arr;
}

console.log(bubleSort([4, 8, 5, 2, 9]));

// Diagram:

// i 	swap	arr[i]	arr[i+1]	arr[i] > arr[i+1]	arr[i]	arr[i+1]	    arr
// 0	false 	   4	    8	        false 	           4	    8	    [4,8,5,2,9]
// 1	true 	   8	    5	        true 	           5	    8	    [4,5,8,2,9]
// 2	true 	   8	    2	        true 	           2	    8	    [4,5,2,8,9]
// 3	true 	   8	    9	        false 	           8	    9	    [4,5,2,8,9]

// 0	false 	   4	    5	        false 	           4	    5	    [4,5,2,8,9]
// 1	true 	   5	    2	        true 	           2	    5	    [4,2,5,8,9]
// 2	true 	   5	    8	        false 	           5	    8	    [4,2,5,8,9]
// 3	true 	   8	    9	        false 	           8	    9	    [4,2,5,8,9]

// 0	false 	   4	    2	        true 	           2	    4	    [2,4,5,8,9]
// 1	true 	   4	    5	        false 	           4	    5	    [2,4,5,8,9]
// 2	true 	   5	    8	        false 	           5	    8	    [2,4,5,8,9]
// 3	true 	   8	    9	        false 	           8	    9	    [2,4,5,8,9]
