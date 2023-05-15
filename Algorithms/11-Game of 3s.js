// We want to play a "Game of 3s". Here's how you play it:

// First, you pick a random number. Then, repeatedly do the following:

// If the number is divisible by 3, divide it by 3.
// If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
// The game stops when you reach "1".

// Pseudocode:
// 1- Create a function that takes a parameter as a number
// 2- Create an empty array
// 3- Create a while loop and check if number is not equal to 1
// 4- 	Inside the loop, check if number divisible by 3
// 5- 		If so, push number to array
// 6- 		Set the number to number/3
// 7- 	Else, 
// 8- 		define a variable and if modulus of the number equals to 1 then send -1 to the variable, else send -1
// 9- 		push the number and the variable to array
// 10- 		number = (number + variable)/3
// 11-  Push 1 to array as the last item
// 12-  Convert array to string
// 13- Call the function

// Code:

function gameOf3s(number) {
	const array = [];
	while (number !== 1) {
		if (number % 3 === 0) {
			array.push(`${number}`);
			number = number / 3;
		} else {
			let nextSteps = number % 3 === 1 ? -1 : 1;
			array.push(`${number} ${nextSteps}`);
			number = (number + nextSteps) / 3;
		}
	}
	array.push("1");
	return array.join("\n");
}
console.log(gameOf3s(100));

// Diagram:

//  number		array     					number		nextSteps	    array   					  number		
//   100		[] 	     		 	 		 100 	       -1 	        [100 -1]    	  				33            
//    33		[100 -1] 	  		  		 33 	        - 	        [100 -1, 33] 	  				11          
//    11		[100 -1,33]   		  		 11			    1			[100 -1, 33, 11 1]	 			 4
//     4		[100 -1, 33, 11 1]	   		 4		       -1			[100 -1, 33, 11 1, 4 -1]		 1
// 	   1			=>				push 1 to array			=>			[100 -1, 33, 11 1, 4 -1, 1]		 
