// Declare a function isPalindrome(str) that takes a string as an input.
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Pseudocode:
// 1- Declare a function which has 'word' parameter
// 2-   Use toLowerCase method to convert the string to lowercase letters
// 3-   Loop through 0 to string length / 2
// 4-     Inside the loop, check if string[i] is equal to string[string length-i-1]
// 5-       If so return true
// 6-   Return false
// 6- Call the func to print result

let checkPalindrome = function (word) {
	word = word.toLowerCase();
	for (let i = 0; i < word.length / 2; i++) {
		if (word[i] != word[word.length - 1 - i]) {
			return false;
		}
	}
	return true;
};
console.log(checkPalindrome("radar"));

// Diagram:
// 1: i=0 -> checkString[0]='r' checkString[3] = 'r'
// 2: i++ ... i=1 -> checkString[1]='a' checkString[2] = 'a'
// 3: i++ ... i=2 i is not smaller than string length/2 -> Loop will stop
// 4: print result: true
