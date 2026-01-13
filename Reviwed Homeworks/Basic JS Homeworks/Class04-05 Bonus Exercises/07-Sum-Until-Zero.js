function isNumber(input) {
    let number = parseInt(input);

    if(isNaN(number)) {
        return false;
    }
    if(number.toString().trim() !== input) {
        return false;
    }
    return true;
}
function sumUntilZero() { 
    let sum = 0;
    let flag = true;

    while(true) {
        let input = prompt("Enter a number (enter 0 to stop):").trim();

        if(isNumber(input)) {
            let number = parseInt(input);
            if(number === 0) {
                flag = false;
                return sum;
            }
            sum += number;
        } else {
            console.log("NaN");
            continue;
        }
    }
}
console.log(sumUntilZero());