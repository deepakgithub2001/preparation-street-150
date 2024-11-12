// Determining Even/Odd Numbers
// Difficulty: Easy
// Topics: Basic Programming
// Description: Write a program to check whether a number is even or odd.
// Example:
// Input: number = 4
// Output: Even
// Explanation: Since 4 is divisible by 2, it is an even number.

function isEvenOdd(number) {
    if (number % 2 == 0) {
        return ("Even number");
    }
    else {
        return ("Odd number");
    }
}
console.log(isEvenOdd(7));
console.log(isEvenOdd(10));