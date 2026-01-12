function getStringLength(string) {
    if (validateString(string)) {
        return string.length;
    } else if (validateString(string) === 0) {
        return 0;
    } else {
        return null;
    }
}

function validateString(string) {
    if (string === null || string === ' ') {
        return 0;
    } else if (Number.isNaN(parseInt(string))) {
        return true;
    } else {
        return null;
    }
}

let string = prompt("Enter a string:")

console.log(getStringLength(string));