function validateMode(input) {
    if (input === 1 || input === 2) {
        return true;
    } else {
        return false;
    }
}

function validateInput(input) {
    if (Number.isNaN(input) || input <= 0) {
        return false;
    } else {
        return true;
    }
}

function humanToDogYears(years, conversionConstant = 7) {
    if (validateInput(years)) {
        let dogYears = years * conversionConstant;
        return `${years} human years is around ${dogYears.toFixed(2)} in dog years.`;
    } else {
        return "Not a valid input.";
    }
}

function dogToHumanYears(years, conversionConstant = 7) {
    if (validateInput(years)) {
        let humanYears = years / conversionConstant;
        return `${years} dog years is around ${humanYears.toFixed(2)} in human years.`;
    } else {
        return "Not a valid input.";
    }
}

let mode = parseInt(prompt("Type 1 to calculate Human to Dog years / Type 2 to calculate Dog to Human Years"));

if (validateMode(mode)) {
    if (mode === 1) {
        let years = parseInt(prompt("Enter the human years you want to convert into dog years:"))
        console.log(humanToDogYears(years));
    } else {
        let years = parseInt(prompt("Enter the dog years you want to convert into human years:"))
        console.log(dogToHumanYears(years));
    }
} else {
    console.log("Not a valid input.");
}