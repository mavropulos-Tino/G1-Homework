function hoursToMinutes(hours) {
    return hours * 60;
}

function validateNum(num) {
    if (Number.isNaN(num)) {
        return null;    
    } else if (num < 0) {
        return null;
    } else if (num === 0) {
        return 0;
    } else {
        return `${num} hours is ${hoursToMinutes(num)} minutes`;
    }
}

let number = parseFloat(prompt("Enter the amount of hours you want to convert into minutes:"));
console.log(validateNum(number));