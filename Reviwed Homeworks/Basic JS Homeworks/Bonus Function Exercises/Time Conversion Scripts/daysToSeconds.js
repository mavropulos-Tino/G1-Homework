function daysToSeconds(days) {
    return days * 86400;
}

function validateNum(num) {
    if (Number.isNaN(num)) {
        return null;    
    } else if (num < 0) {
        return null;
    } else if (num === 0) {
        return 0;
    } else {
        return `${num} days is ${daysToSeconds(num)} seconds`;
    }
}

let number = parseFloat(prompt("Enter the amount of days you want to convert into seconds:"));
console.log(validateNum(number));