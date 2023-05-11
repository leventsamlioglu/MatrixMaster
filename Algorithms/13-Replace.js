// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// Pseudocode:
// 1- Create a function
// 2-   convert string to array
// 3-   loop through 0 to length of the array
// 4-       check if has the array the searching word
// 5-       if so, replace the new word
// 6-       replace the new word
// 7-   convert array to string
// 8-   return string

function myReplace(str, before, after) {
	let arr = str.split(" ");
console.log(arr);	
for (let i = 0; i < arr.length; i++) {
		if (arr[i] === before) {
			// arr.splice(i, 1, after);
            arr[i]=after
		}
	}
	str = arr.join(" ");
	return console.log(str);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


// Diagram:

// str	"A quick brown fox jumped over the lazy dog"		
// before	jumped		
// after	leaped		
// arr	[‘A’, ‘quick’, ‘brown’, ‘fox’, ‘jumped’, ‘over’, ‘the’, ‘lazy’, ‘dog’]	

// i	arr[i]	    arr[i] === before	    arr[i]
// 0	A	        false 	                A
// 1	quick	    false 	                quick
// 2	brown	    false 	                brown
// 3	fox	        false 	                fox
// 4	jumped	    true 	                leaped
// 5	over	    false 	                over
// 6	the	        false 	                the
// 7	lazy	    false 	                lazy
// 8	dog	        false 	                dog
			
// result	"A quick brown fox leaped over the lazy dog"		

