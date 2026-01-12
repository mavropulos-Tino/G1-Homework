function minutesToSeconds(minutes) {
    return minutes * 60;
}

function validateNum(num) {
    if (Number.isNaN(num)) {
        return null;    
    } else if (num < 0) {
        return null;
    } else if (num === 0) {
        return 0;
    } else {
        return `${num} minutes is ${minutesToSeconds(num)} seocnds`;
    }
}

let number = parseFloat(prompt("Enter the amount of minutes you want to convert into seconds:"));
console.log(validateNum(number));