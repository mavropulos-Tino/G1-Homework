function isNumber(input) {
    let number = parseInt(input);

    if(isNaN(number)) {
        console.log("NaN");
        return false;
    }
    if(number.toString().trim() !== input) {
        console.log("NaN");
        return false;
    }
    return true;
}
function getStrings() {
    let arraySize = prompt("How many strings do you want to enter?");
    let strings = [];

    if(isNumber) {
        for (let i = 0; i < arraySize; i++) {
            let value = prompt(`Enter string ${i+1}/${arraySize}:`);
            strings.push(value);
        }
    } else {
        return;
    }
    return strings;
}
function longestString() {
    let stringsArray = getStrings();
    let longest = stringsArray[0];

    for(let i=0; i<stringsArray.length; i++) {
        if(stringsArray[i].length > longest.length) {
            longest = stringsArray[i];
        }
    }
    return longest;
}

console.log(longestString());