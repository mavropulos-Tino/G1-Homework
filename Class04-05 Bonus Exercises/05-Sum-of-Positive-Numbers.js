function sumPositiveNumbers(array) {
    let sum = 0;

    for(let i=0; i<array.length; i++) {
        if(array[i] > 0) {
            sum = sum + array[i];
        } continue;
    }
    return sum;
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
function stringToArray(string) {
    let array = [];
    let numbersArray = string.trim().split(/\s+/);

    for (let i = 0; i < numbersArray.length; i++) {
        if (!validatePrompt(numbersArray[i])) {
            array.push(parseInt(numbersArray[i]));
        }
    }
    return sumPositiveNumbers(array);
}

let input = prompt("Enter an array of numbers:");
if (input === null) {
    console.log("Input cancelled by user");
} else {
    console.log(stringToArray(input));
}