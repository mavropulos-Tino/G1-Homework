function getFirstAndLastChar(string) {
    if (validateString(string)) {
        let firstChar = string.charAt(0);
        let lastChar = string.charAt(string.length - 1);
        return `${firstChar}, ${lastChar}`;
    } else {
        return null;
    }
}

function validateString(string) {
    if (Number.isNaN(parseInt(string)) && string !== null && string.length > 1 ) {
        return true;
    } else {
        return false;
    }
}

let string = prompt("Enter a string:")
console.log(getFirstAndLastChar(string));