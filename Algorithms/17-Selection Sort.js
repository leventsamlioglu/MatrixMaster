// Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.

// Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.

// Pseudocode:

// 1- Create a function that takes an array as parameter
// 2- Declare a variable for minimum index
// 3- Loop through i=0 to length of array
// 4-   inside the loop, minimum index = i
// 5-   loop through j=i+1 to length of array
// 5-       check if arr[j]<arr[minIndex]
// 6-       if so minIndex = j
// 7-   swap arr[i] and arr[minIndex]
// 8- Return arr
// 9- Call the function to print result

function selectionSort(arr) {
	let minIndex;
	let length = arr.length;

	for (let i = 0; i < length; i++) {
		minIndex = i;
		for (let j = i + 1; j < length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
	}
	return arr;
}

console.log(selectionSort([4, 8, 5, 2, 9]));

// Diagram:

// i   j minIndex  arr[j]  arr[minIndex] arr[j] < arr[minIndex]	  minIndex=j   arr[j]	arr[minIndex]	 arr[i]    arr
// 0	    0
//
//     1    0       8            4                false               -          -          -
//     2    0       5            4                false               -          -          -
//     3    0       2            4                true                3          2          2
//     4    3       9            2                false               -          -          -
//                                                                                          2  (swap)     4    [2,8,5,4,9]
// 1
//     2    1       5            8                true                2          5          5
//     3    2       4            5                true                3          4          4
//     4    3       9            4                false               -          -          -
//                                                                                          4  (swap)     8    [2,4,5,8,9]
// 2
//     3    2       8            5                false               -          -          -
//     4    2       9            5                false               -          -          -
//                                                                                          -  (no swap)   -   [2,4,5,8,9]
// 3
//     4    3       9            8                false               -         -           -
//                                                                                          -  (no swap)   -   [2,4,5,8,9]
