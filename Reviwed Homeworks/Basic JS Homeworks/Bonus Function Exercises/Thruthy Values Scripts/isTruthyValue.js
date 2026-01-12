function isThruthyValue(input) {
    if (input === null || input === '') {
        return false;
    }

    let int = parseInt(input);
    if (Number.isNaN(int)) {
        return true; 

    } else {
        if (int) {return true;} 
        else {return false;}
    }
}

let input = prompt("Enter a value:");
console.log(isThruthyValue(input));