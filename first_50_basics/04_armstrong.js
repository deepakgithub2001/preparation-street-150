// Calculating Armstrong Numbers
// Difficulty: Easy
// Topics: Basic Programming, Number Theory
// Description: Write a program to check if a number is an Armstrong number.
// Example:
// Input: number = 153
// Output: Armstrong Number
// Explanation: 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.

// An Armstrong number is one that remains equal to the sum of its digits raised to the power of the number of digits in the number.

function isArmstrong(num){
    const digits = String(num).split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);

    return sum === num;
}
console.log(isArmstrong(153));