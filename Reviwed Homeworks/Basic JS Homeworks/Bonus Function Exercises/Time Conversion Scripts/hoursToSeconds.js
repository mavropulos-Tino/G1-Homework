function hoursToSeconds(hours) {
    return hours * 3600;
}

function validateNum(num) {
    if (Number.isNaN(num)) {
        return null;    
    } else if (num < 0) {
        return null;
    } else if (num === 0) {
        return 0;
    } else {
        return `${num} hours is ${hoursToSeconds(num)} seconds`;
    }
}

let number = parseFloat(prompt("Enter the amount of hours you want to convert into seconds:"));
console.log(validateNum(number));