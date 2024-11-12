// Crafting Star Patterns
// Difficulty: Easy
// Topics: Basic Programming, Patterns
// Description: Write a program to create different star patterns (e.g., pyramid, diamond).
// Example:
// Input: patternType = "pyramid", height = 5
// Output:

//     *
//    ***
//   *****
//  *******
// *********

function starPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        
        let spaces = " ".repeat(rows - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars + spaces);
        
    }
}

starPattern(5); 