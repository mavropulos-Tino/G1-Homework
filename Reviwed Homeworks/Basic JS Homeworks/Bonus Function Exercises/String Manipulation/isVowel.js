function isVowel(string) {
    let char = string.toLowerCase();
    switch (char) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
        default:
            return false;
    }
}

let string = prompt("Enter a string:")
console.log(isVowel(string));