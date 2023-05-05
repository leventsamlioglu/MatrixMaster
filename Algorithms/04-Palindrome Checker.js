// Declare a function isPalindrome(str) that takes a string as an input.
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Pseudocode:
// 1- Declare a function which has 'word' parameter
// 2- Use split method to split the string into the array of substrings 
// 3- Use join method to return the array as a string.
// 4- Use toLowerCase method to convert the string to lowercase letters
// 5- Loop through 0 to string length / 2
// 6- Inside the loop, check if string[i] is equal to string[string length-i-1]
// 7- If so return true
// 8- Use console to print function result


let checkPalindrome = function(word){
    let inputWord = word;
    let checkString = inputWord.split(" ").join("").toLowerCase();
    for(let i = 0; i < checkString.length/2; i++){
        if(checkString[i] != checkString[checkString.length-i-1]){
          return false; 
        }
    }
    return true;
    }
    let output = checkPalindrome("raar");
    console.log(output);


// Diagram:
// 1: i=0 -> checkString[0]='r' checkString[3] = 'r'
// 2: i++ ... i=1 -> checkString[1]='a' checkString[2] = 'a'
// 3: i++ ... i=2 i is not smaller than string length/2 -> Loop will stop
// 4: print result: true