function isValidUsername(username) {
    if(validateString(username) && (username.length > 5 && username.length < 12)) {
        return true;
    } else {
        return false;
    }
}

function validateString(string) {
    if(Number.isNaN(parseInt(string)) && string !== null && string !== ' ') {
        return true;
    } else {
        return false;
    }   
}

let username = prompt("Enter your first name:");
console.log(isValidUsername(username));