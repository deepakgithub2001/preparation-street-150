// Finding the Factorial of a Number
// Difficulty: Easy
// Topics: Basic Programming, Mathematical Computations
// Description: Write a program to compute the factorial of a given number.
// Example:
// Input: number = 5
// Output: 120
// Explanation: 5! (factorial) is 5 × 4 × 3 × 2 × 1 = 120.

function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result
}

const number = 5;
console.log("The factorial of", number, "is", factorial(number));