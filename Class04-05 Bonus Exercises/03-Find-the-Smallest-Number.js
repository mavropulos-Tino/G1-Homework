function findSmallest(array) {
    let smallest = Infinity;

    for(let i=0; i<array.length; i++) {
        if(array[i] < smallest) {
            smallest = array[i];
        } continue;
    }

    if(smallest === Infinity) {
        return `Array has no valid numbers`;
    } return `Smallest number in the array is: ${smallest}`;
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
    return findSmallest(array);
}

let input = prompt("Enter an array of numbers:");
if (input === null) {
    console.log("Input cancelled by user");
} else {
    console.log(stringToArray(input));
}