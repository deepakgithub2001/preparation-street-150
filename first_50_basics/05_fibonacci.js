// Generating the Fibonacci Series
// Difficulty: Easy
// Topics: Basic Programming, Sequences
// Description: Write a program to generate the Fibonacci series up to a given number.
// Example:
// Input: limit = 10
// Output: [0, 1, 1, 2, 3, 5, 8]
// Explanation: The Fibonacci series up to 10 is generated as [0, 1, 1, 2, 3, 5, 8].

// The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones, starting from 0 and 1. The sequence begins like this:
// 0
// 1
// 0 + 1 = 1
// 1 + 1 = 2
// 2 + 1 = 3
// 3 + 2 = 5
// 5 + 3 = 8..

function fibonacciSeries(limit) {
    let fibSeries = [];
    let a = 0, b = 1;
    while (a <= limit) {
        fibSeries.push(a);

        let temp = a;
        a = b;
        b = temp + b;
    }
    return fibSeries;
}


let limit = 10;
let result = fibonacciSeries(limit)
console.log(result); 