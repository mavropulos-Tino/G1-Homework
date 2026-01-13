function isNumber(input) {
    let number = parseInt(input);

    if(isNaN(number)) {
        console.log("NaN");
        return false;
    }
    if(number.toString().trim() !== input) {
        console.log("NaN");
        return false;
    }
    return isPrime(input);
}

function isPrime(number) {
    if(number <= 1) {
        return "Not Prime";
    }
    
    for (let i=2; i<number; i++) {
        if (number % i === 0) {
            return "Not Prime";
        }
    }
    return "Prime";
}

let number = prompt("Enter a number:");
console.log(isNumber(number));