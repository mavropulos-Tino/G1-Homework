function reverseArray(array) {
    let reversedArray = [];

    for(let i=array.length - 1; i>=0; i--) {
        reversedArray.push(array[i]);
    }

    return reversedArray;
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
    return reverseArray(array);
}

let input = prompt("Enter an array of numbers:");
if (input === null) {
    console.log("Input cancelled by user");
} else {
    console.log(stringToArray(input));
}