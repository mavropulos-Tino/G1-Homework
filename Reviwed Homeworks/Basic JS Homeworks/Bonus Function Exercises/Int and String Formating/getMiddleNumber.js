function getMiddleNumber(a, b, c) {
    if (validateInatger(a) && validateInatger(b) && validateInatger(c)) {
        if (a === b || a === c || b === c) {
            return null;
        }

        if ((a > b && a < c) || (a < b && a > c)) {
            return a;
        }
        if ((b > a && b < c) || (b < a && b > c)) {
            return b;
        }
        return c;

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
let num3 = parseInt(prompt("Enter number 3:"));

console.log(getMiddleNumber(num1, num2, num3));