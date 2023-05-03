// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

// Pseudocode:
// 1- Declare a function which has 'n' parameter
// 1- Check if n<0 then return 'Number must be positive' 
// 2- Else if n=0 then return zero
// 4- Else define 'sum' variable
// 5- Loop through 1 to n
// 6- Inside the loop, assign sum*i to sum
// 7- Return sum
// 8- Use console to print function result


function factorialize(n) {
    if (n < 0) {
        return 'Number must be positive'
    } else if (n === 0) {
        return 1
    } else {
        return n * factorialize(n - 1)
        // let sum = 1;
        // for (let i = 1; i <= n; i++) {
        //     sum *= i
        // }
    }
}

console.log(factorialize(4));

// Diagram:
// 1: i=1 -> sum:1
// 2: i++ ... i=2 -> sum:2
// 3: i++ ... i=3 -> sum:6
// 4: i++ ... i=4 -> sum:24
// 5: i++ ... 5 is not smaller than n -> Loop will stop
// 6: print result: 24