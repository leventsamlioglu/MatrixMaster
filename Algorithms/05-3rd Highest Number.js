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
// 1: first=0 second=0 third=0
// 2: i=0 -> array[0]=2 first=2 second=0 third=0
// 3: i=1 -> array[1]=2 first=5 second=2 third=0
// 4: i=2 -> array[2]=3 first=5 second=3 third=2
// 5: i=3 -> array[3]=1 first=5 second=3 third=2
// 6: i=3 -> array[4]=4 first=5 second=4 third=3
// 7: i=4 -> i is not smaller than array length -> Loop will stop
// 8: print result: true
