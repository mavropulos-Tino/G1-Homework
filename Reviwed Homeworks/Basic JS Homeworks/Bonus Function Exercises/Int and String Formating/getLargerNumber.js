function getLargerNumber(a, b) {
    if (validateInatger(a) && validateInatger(b)) {
        if (a >= b) {
            return a;
        } else {
            return b;
        }
    } else {
        return null;
    }
}

function validateInatger(intager) {
    if (!Number.isNaN(parseInt(intager))) {
        return true;
    } else {
        return false;
    }
}

let num1 = parseInt(prompt("Enter number 1:"));
let num2 = parseInt(prompt("Enter number 2:"));

console.log(getLargerNumber(num1, num2));