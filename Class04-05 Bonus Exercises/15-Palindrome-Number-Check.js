function isNumber(input) {
    let number = parseInt(input);

    if(isNaN(number)) {
        return "NaN";
    }
    if(number.toString() !== input) {
        return "NaN";
    }
    return reverseNumber(number);
}

function reverseNumber(number) {
    let digits = number.toString().split("");
    let reversedArray = [];

    for (let i=digits.length-1; i>=0; i--) {
        reversedArray.push(digits[i]);
    }

    if(parseInt(reversedArray.join("")) === number) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}

let number = prompt("Enter a number:");
console.log(isNumber(number));