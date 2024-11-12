// Identifying Palindromes
// Difficulty: Easy
// Topics: Basic Programming, String Manipulation
// Description: Write a program to check if a string or number is a palindrome.
// Example:
// Input: string = "radar"
// Output: Palindrome
// Explanation: "radar" reads the same backward as forward.

// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

function isPalindrome(input) {
    const str = input.toString();
    if (str === str.split('').reverse().join('')) {
        return "This is a Palindrome Number";

    } else {
        return "This is not a Palindrome Number";

    }
} 

console.log(isPalindrome("radar"));