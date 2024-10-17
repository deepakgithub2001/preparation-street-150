function isLeapYear(year) {
    // A leap year is divisible by 4 but not divisible by 100 unless divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}


console.log(isLeapYear(2021));
console.log(isLeapYear(2023));
console.log(isLeapYear(2023));