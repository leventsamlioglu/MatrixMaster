// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// Pseudocode:
// 1- Create a function with 3 parameters (str,before,after)
// 2-   define a variable1 and assign 'before' with the first letter of 'before' is capitalized
// 3-   define a variable2 and assign 'after' with the first letter of 'after' is capitalized
// 4-   check if before = variable1 
// 5-       if so, replace the variable1 with before in the string and return it
// 6-       else, replace the lowerCased 'after' with before in the string and return it
// 7- Call the function with 3 parameter and print it


function myReplace(str, before, after) {
	let capitalizeBefore = before[0].toUpperCase() + before.substring(1);
	let capitalizeAfter = after[0].toUpperCase() + after.substring(1);

	if (before === capitalizeBefore) {
		return str.replace(before, capitalizeAfter);
	} else {
		return str.replace(before, after.toLowerCase());
	}
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped")); 

// Diagram:

// str	"A quick brown fox jumped over the lazy dog"

// before	after		capitalizeBefore	  capitalizeAfter  if statement					str
//----------------------------------------------------------------------------------------------------------------------
// jumped	Leaped		Jumped				  Leaped			false		"A quick brown fox leaped over the lazy dog"
// Jumped	leaped		Jumped				  Leaped			true		"A quick brown fox Leaped over the lazy dog"
