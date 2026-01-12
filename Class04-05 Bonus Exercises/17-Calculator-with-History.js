let history = [];

function reRun() {
    calculatorWithHistory();
}

function isValid(input) {
    let number = parseInt(input, 10);

    if(input === null) {
        return false;
    }
    if(Number.isNaN(number)) {
        return false;
    }
    if(number.toString() !== input) {
        return false;
    }
    return true;
}

function calculate(operand1, operator, operand2) {
    let result;

    if(operator === "+") {
        result = operand1 + operand2;

    } else if(operator === "-") {
        result = operand1 - operand2;

    } else if(operator === "*") {
        result = operand1 * operand2;

    } else {
        if(operand2 === 0) {
            alert("Cant divide by zero");
            return reRun();
        }
        result = operand1 / operand2;
    }

    alert(`${operand1} ${operator} ${operand2} = ${result}`);
    history.push(result);

    let replay = prompt("Do you want to calculate again? (yes / no)");
    // Logic to stop an error of (cant use .trim() on Null)
    if (replay && replay.trim().toLowerCase() === "yes") {
        reRun();
    } else {
        console.log(history);
    }
}

function calculatorWithHistory() {
    let input = prompt('Enter a mathematical expression (example: 2 + 3 ):');

    // Null or Empty String Checking
    if(input === null || input.trim() === "") {
        alert("Input cannot be empty");
        return reRun();
    }

    // Format Checking
    let segments = input.trim().split(/\s+/);
    if(segments.length !== 3) {
        alert("Invalid format. Use: number operator number");
        return reRun();
    }

    // Operand Checking
    if(!isValid(segments[0]) || !isValid(segments[2])) {
        alert("Invalid operands used");
        return reRun();
    }
    let operand1 = parseInt(segments[0], 10);
    let operand2 = parseInt(segments[2], 10);

    // Operator Checking
    let operator = segments[1];
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            calculate(operand1, operator, operand2);
            break;
        default:
            alert("Invalid operator. Use + - * or /");
            return reRun();
    }
}

calculatorWithHistory();
