// 1. Write a program using JS that will print all the numbers from 1 to 135

// Pseudocode:
// 1- Loop through numbers from 1 until 135
// 2- Use consel to print the numbers

// Code:

for (let i = 1; i <= 135; i++) {
  console.log(i);
}

// Diagram:
// 1: i=1 -> Result:1
// 2: i++ ... i=2 -> Result:1,2
// 3: i++ ... i=3 -> Result:1,2,3
// ...
// 135: i++ ... i=135 -> Result:1,2,3,...135
// 136: i++ ... 136 is not smaller than 135 -> Loop will stop



// ----------------------------------------------------

// 2. Write a program using JS that will print all the odd numbers between 1 - 135

// Pseudocode:
// 1- Loop through numbers from 1 until 135
// 2- Check the numbers if they are odd or not with using % operator
// 3- If true, use consel to print the numbers

// Code:

for (let i = 1; i <= 135; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Diagram:

// 1: i=1 -> Result:1
// 2: i++ ... i=2 -> Result:-
// 3: i++ ... i=3 -> Result:3
// ...
// 135: i++ ... i=135 -> Result:135
// 136: i++ ... 136 is not smaller than 135 -> Loop will stop

// ----------------------------------------------------

// 3. Write a program using JS that will print sum of all numbers between 1 - 135

// Pseudocode:
// 1- Define 'sum' variable with 0
// 2- Loop through numbers from 1 until 135
// 3- Inside the loop add 'i' to 'sum' 
// 4- Use consel to print the sum

// Code:

let sum = 0;
for (let i = 1; i <= 135; i++) {
  console.log(`Number is: ${i} Sum: ${(sum += i)}`);
}

// Diagram:

// 1: i=1 -> Sum:1
// 2: i++ ... i=2 -> Sum:3
// 3: i++ ... i=3 -> Sum:6
// ...
// 135: i++ ... i=135 -> Sum:9180
// 136: i++ ... 136 is not smaller than 135 -> Loop will stop

// ----------------------------------------------------


// 4. Write a program using JS that will print the elements of an array

// Pseudocode:
// 1- Create an array with some values
// 2- Loop through numbers from 0 until length of the array
// 3- Inside the loop use consel to print every element in array with the help of index of element


let arr = [1, 4, 2, 12];
// for (const item of arr) {
//   console.log("Item of array : ", item);
// }

for(let i=0;i<arr.length;i++){
  console.log("Item of array : ", arr[i])
}

// Diagram:

// 1: i=0 -> Result:1
// 2: i++ ... i=1 -> Result:4
// 3: i++ ... i=2 -> Result:2
// 4: i++ ... i=3 -> Result:12

// ----------------------------------------------------

// 5. Write a program using JS that will print the max value in an array

// Pseudocode:
// 1- Create an array with some values
// 2- Create 'max' variable with 0
// 3- Loop through numbers from 0 until length of the array
// 4- Inside the loop check if element of the array > max. If it's true then 'max' = 'item' else 'max' will stay same
// 5- Use consel to print max value. 


let max = 0;

// for (const item of arr) {
//   item > max ? (max = item) : (max = max);
// }

for(let i=0;i<arr.length;i++){
  arr[i]>max ? (max = arr[i]) : (max = max);
}

console.log("Max number in array:", max);

// Diagram:

// 1: i=0 arr[0]=1 -> Result:1
// 2: i=1 arr[1]=4 -> Result:4
// 3: i++ arr[2]=2 -> Result:4
// 4: i++ arr[3]=12 -> Result:12

// ----------------------------------------------------

// 6. Write a program using JS that will print the average value of an array

// Pseudocode:
// 1- Create an array with some values
// 2- Create 'total' variable with 0
// 3- Loop through numbers from 0 until length of the array
// 4- Inside the loop add the element of the array to 'total'
// 5- Use consel to print total value. 

let total = 0;

// for (const item of arr) {
//   total += item;
// }

for(let i=0;i<arr.length;i++){
  total+=arr[i]
}

console.log("Average of array is: ", total / arr.length);

// Diagram:

// 1: i=0 arr[0]=1 -> Result:1
// 2: i=1 arr[1]=4 -> Result:5
// 3: i++ arr[2]=2 -> Result:7
// 4: i++ arr[3]=12 -> Result:19

// ----------------------------------------------------

// 7. Write a program using JS that will print the Eliminate the Negatives

// Pseudocode:
// 1- Create an array with some values includes negative numbers
// 2- Loop through numbers from 0 until length of the array
// 3- Inside the loop check the element of the array if it is smaller than 0 or not
// 4- If it is, assign 0
// 5- Use consel to print the result. 

let arr1 = [2, -1, 4, -3];

// for (const item of arr1) {
//   if (item < 0) {
//     arr1[arr1.indexOf(item)] = 0;
//   }
// }

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] < 0) {
    arr1[i] = 0;
  }
}

console.log("Eliminate the Negatives: ", arr1);

// Diagram:

// 1: i=0 arr[0]=2 -> Result:1
// 2: i=1 arr[1]=-1 -> Result:0
// 3: i++ arr[2]=4 -> Result:4
// 4: i++ arr[3]=-3 -> Result:0
// [1,0,4,0]

// ----------------------------------------------------

// 8. Write a program using JS that will print the Number to String

// Pseudocode:
// 1- Create an array with some values includes negative numbers
// 2- Loop through numbers from 0 until length of the array
// 3- Inside the loop check the element of the array if it is smaller than 0 or not
// 4- If it is, assign 'Turing'
// 5- Use consel to print the result. 

let arr2 = [2, -1, 4, -3];

// for (const item of arr2) {
//   if(item<0){
//     arr2[(arr2.indexOf(item))]='Turing'
//   }
// }

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] < 0) {
    arr2[i] = "Turing";
  }
}

console.log("Eliminate the Negatives: ", arr2);

// Diagram:

// 1: i=0 arr[0]=2 -> Result:1
// 2: i=1 arr[1]=-1 -> Result:'Turing'
// 3: i++ arr[2]=4 -> Result:4
// 4: i++ arr[3]=-3 -> Result:'Turing'
// [1,'Turing',4,'Turing']