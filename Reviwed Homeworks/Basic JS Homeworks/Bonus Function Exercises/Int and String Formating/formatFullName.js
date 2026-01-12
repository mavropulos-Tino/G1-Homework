function formatFullName(firstName, lastName) {
    if(validateString(firstName) && validateString(lastName)) {
        return `${lastName}, ${firstName}`;
    } else {
        return null;
    }
}

function validateString(string) {
    if(Number.isNaN(parseInt(string)) && string !== null && string !== ' ') {
        return true;
    } else {
        return false;
    }
}

let firstName = prompt("Enter your first name:");
let lastName= prompt("Enter your last name:");

console.log(formatFullName(firstName, lastName));