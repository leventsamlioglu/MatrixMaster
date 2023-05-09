// Return the length of the longest word in the provided sentence. Your response should be a number. For these algorithms you are allowed to use the split() method.

// Pseudocode:

// 1- Declare a variable (max)
// 2- Declare a function with 'text' parameter to find longest word
// 3-   Declare a new array which consists every word of  the text
// 4-   Loop through 0 to length of the array
// 5-       Check if length of each element of array is greater then max
// 6-           If so, max = length of the element
// 7-   Return max
// 8- Call the function with an string argument
// 9- Use console to print max

let max = 0;

function findLongestWord(text) {
  let newArray = text.split(" ");
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].length > max) {
      max = newArray[i].length;
    }
  }
  return max
}

console.log(findLongestWord("May the force be with you"));


// Diagram:
// 1: max=0 text="May the force be with you" 
// 2: newArray=[May, the, force, be, with, you]
// 3: i=0 -> array[0]=May -> array[0].length=3 max=3 
// 4: i=1 -> array[1]=the -> array[1].length=3 max=3 
// 5: i=2 -> array[2]=force -> array[2].length=5 max=5 
// 6: i=3 -> array[3]=be -> array[3].length=2 max=5 
// 7: i=4 -> array[4]=with -> array[4].length=4 max=5 
// 8: i=5 -> array[5]=you -> array[5].length=3 max=5 
// 6: print max
