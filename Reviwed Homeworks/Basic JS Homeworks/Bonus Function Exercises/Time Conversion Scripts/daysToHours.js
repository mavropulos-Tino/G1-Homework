function daysToHours(days) {
    return days * 24;
}

function validateNum(num) {
    if (Number.isNaN(num)) {
        return null;    
    } else if (num < 0) {
        return null;
    } else if (num === 0) {
        return 0;
    } else {
        return `${num} days is ${daysToHours(num)} hours`;
    }
}

let number = parseFloat(prompt("Enter the amount of days you want to convert into hours:"));
console.log(validateNum(number));