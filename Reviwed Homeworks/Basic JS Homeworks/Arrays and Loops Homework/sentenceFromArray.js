function combineStrings(array, arrayLength) {
    let sentence = `${array[0]} `;
    for(let i=1; i < arrayLength; i++) {
        let word = array[i];
        sentence = sentence + `${word} `;
    }
    return sentence;
}

function validateNumber(input) {
    if (!Number.isNaN(input)) {
        return true;
    } else {
        return false;
    }
}

function inputStrings(arrayLength) {
    let array = [];
    let string;
    for(let i=0; i < arrayLength; i++) {
        string = prompt("Enter your word:");
        array.push(string);
    }

    return combineStrings(array, arrayLength);
}

let arrayLength = parseInt(prompt("Enter how much words do you want your sentence to have:"));
if (validateNumber(arrayLength)) {
    console.log(inputStrings(arrayLength));
} else {
    console.log("Not a valid input!");
}