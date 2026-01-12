let numberCount = getNumberCount();
let numberArray = []

function calculateAverage(array) {
    let sum = 0;
    for(let i=0; i<array.length; i++) {
        sum = sum + array[i];
    }
    return sum/array.length;
}

function validatePrompt(input) {
    if (input === null) {
        return true;
    }
    if (input.trim() === "") {
        return true;
    }
    return !Number.isInteger(parseInt(input));
}

function getNumberCount() {
    let count = prompt(`Enter array length:`);
    if(validatePrompt(count)) {
        return false;
    } else {
        return count;
    }
}

function getArrayNumber() {
    let number = prompt(`Enter array number:`);
    if(validatePrompt(number)) {
        return false;
    } else {
        return number;
    }
}

function pushArrayNumber() {
    for(let i=0; i<numberCount; i++) {
        let number = getArrayNumber();
        if(number) {
            let num = parseInt(number);
            numberArray.push(num);
        } else {
            console.log("Invalid number!");
            return;
        }
    }
    return calculateAverage(numberArray);
}

if(numberCount) {
    console.log(pushArrayNumber());
} else {
    console.log("Invalid array length!");
}