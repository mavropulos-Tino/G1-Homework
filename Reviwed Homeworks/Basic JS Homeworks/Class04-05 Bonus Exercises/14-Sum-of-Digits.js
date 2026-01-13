function isNumber(input) {
    let number = parseInt(input);

    if(isNaN(number)) {
        return "NaN";
    }
    if(number.toString().trim() !== input) {
        return "NaN";
    }
    return sumDigits((number));
}

function sumDigits(number) {
    let sum = 0;
    let digits = number.toString().split("");

    for(let i=0; i<digits.length; i++) {
        sum = sum + parseInt(digits[i]);
    }
    return sum;
}

let number = prompt("Enter a number:");
console.log(isNumber(number));