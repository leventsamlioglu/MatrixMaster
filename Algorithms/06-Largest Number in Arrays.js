// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Pseudocode:
// 1- Declare an array contains 4 sub-arrays
// 2- Declare an empty array
// 3- Declare a variable (max)
// 4- Loop through 0 to first array length
// 5- Loop through 0 to each sub-arrays length
// 6- Check if each items of array greater then max
// 7- If so, max = array item, result = that array, quit the loop
// 8- Use console to print function result

const arr = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
let result = [];
let max = 0;

for (let i = 0; i < arr.length; i++) {
  for (let k = 0; k < arr[i].length; k++) {
    if (arr[i][k] > max) {
      max = arr[i][k];
      result = arr[i];
      k = arr[i].length - 1; // If you find an item greater then max, so it's not necessary to check other items of sub-array
    }
  }
}
console.log(result);

// Diagram:
// 1: max=0 result=0 arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
// 2: i=0 k=0-> array[0][0]=4 max=4 result = [4, 5, 1, 3]
// 3: i=1 k=0-> array[1][0]=13 max=13 result = [13, 27, 18, 26]
// 4: i=2 k=0-> array[2][0]=32 max=32 result = [32, 35, 37, 39]
// 5: i=3 k=0-> array[3][0]=1000 max=1000 result = [1000, 1001, 857, 1]
// 6: print result
