// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// titleCase("I'm a little tea pot")should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".

// Pseudocode:

// 1- define a variable with string values
// 1- convert all letters to lowercase
// 2- convert string to array
// 4- define an empty array
// 3- loop through 0 to length of array
// 3-   put into new array to every items of array as new item
// 4-   uppercase every items first item
// 8-   convert every item to string
// 9- convert array to string

// Code:

let text = "I'm a little tea pot";
let arr = text.toLowerCase().split(" ");
let newArr = [];

for (let i = 0; i < arr.length; i++) {
	newArr[i] = arr[i].split("");
	newArr[i][0] = newArr[i][0].toUpperCase();
	newArr[i] = newArr[i].join("");
}

console.log(newArr.join(" "));

// ------------------------Alternative and beter way--------------------------
// function titleCase(str) {

//     var arr = str.toLowerCase().split(' ');
  
//     var newStr = '';
  
//     for (var i = 0; i < arr.length; i++) {
//       var lower = arr[i];
//       newStr += lower.charAt(0).toUpperCase() + lower.slice(1) + ' ';
//     }
  
//     return console.log(newStr);
//   }
  
//   titleCase("I'm a little tea pot");

// ---------------------------------------------------------------------------

// Diagram:

// text	    "I'm a little tea pot"				
// arr	    [i'm, a, little, tea, pot]				
// newArr	[ ]	

// 	        arr[i].split(“”)	newArr[i]	    newArr[i][0]	newArr[i]	newArr
// i=0	    [i, ‘, m]	        [i, ‘, m]	    I	            I’m	        [I’m]
// i=1	    [a]	                [a]	            A	            A	        [I’m, A]
// i=2	    [l,i,t,t,l,e]	    [l,i,t,t,l,e]	L	            Little	    [I’m, A, Little]
// i=3	    [t,e,a]	            [t,e,a]	        T	            Tea	        [I’m, A, Little, Tea]
// i=4	    [p,o,t]	            [p,o,t]	        P	            Pot	        [I’m, A, Little, Tea, Pot]
					
// newArr.join()	“I'm A Little Pot”				