function isNumber(input) {
    let number = parseInt(input);

    if(isNaN(number)) {
        return "NaN";
    }
    if(number.toString().trim() !== input) {
        return "NaN";
    }
    return countDigits((number.toString()));
}

function countDigits(number) {
    let digits = [];
    for(let i=0; i<number.length; i++) {
        let digit = number.split("");
        digits.push(digit);
    }

    return digits.length;
}

let number = prompt("Enter a number:");
console.log(isNumber(number));