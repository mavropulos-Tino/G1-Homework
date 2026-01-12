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

    let armstrongNumber = 0;
    
    for(let i=0; i<digits.length; i++) {
        armstrongNumber = armstrongNumber + Math.pow(digits[i], digits.length);
    }

    if(armstrongNumber === number) {
        return "Armstrong";
    } else {
        return "Not Armstrong";
    }
}

let number = prompt("Enter a number:");
console.log(isNumber(number));