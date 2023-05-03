// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

let arr = [5, 3, 8, 1]

function filterRange(array, number1, number2) {
    number1 > number2 ? [number1, number2] = [number2, number1] : number1 = number1
    return array.filter((item) => (item >= number1 && item <= number2))
}

let filtered = filterRange(arr, 4, 1)

console.log(filtered)  // 3,1 (matching values)

console.log(arr)      // 5,3,8,1 (not modified)