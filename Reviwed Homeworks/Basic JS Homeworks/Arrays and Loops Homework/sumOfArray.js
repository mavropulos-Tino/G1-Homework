let array = [];

function sumArray(input) {
    let count = 0;
    for(let i=0; i<array.length; i++) {
        count = count + array[i];
    }
    return count;
}

function numberValidation(input) {
    if(!Number.isNaN(input)) {
        return true;
    } else {
        return false;
    }
}

function inputNumbers() {
    for(let i=0; i<5; i++) {
        let number = parseInt(prompt("Enter a number:"));

        if(numberValidation(number)) {
            array.push(number);
        } else {
            return "Not a valid input!";
        }
    }

    return sumArray(array);
}

console.log(inputNumbers());