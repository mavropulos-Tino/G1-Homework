let operator = prompt("Choose an operation you would like to use (+ - * /):");
let result;

// Check if entered operating sign is supported, if not alerts user with an error.
if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {

    // Sets the first operand and checks if the field is empty before parsing.
    let firstOperandUnparased = prompt("Enter your first operand:");
    if (firstOperandUnparased === null || ' ') {
        alert("Field cannot be empty!");

    } else {
        // Makes the first operand a float and checks if its a valid number.
        let firstOperand = parseFloat(firstOperandUnparased);
        if (Number.isNaN(firstOperand)) {
            alert("Please enter a valid number.");

        } else {
            // If first operand is a valid input, we set second operand and check if the field is empty before parsing.
            let secondOperandUnparased = prompt("Enter your second operand:");
            if (secondOperandUnparased === null || ' ') {
                alert("Field cannot be empty!");

            } else {
                // Makes the second operand a float and checks if its a valid number.
                let secondOperand = parseFloat(secondOperandUnparased);
                if (Number.isNaN(secondOperand)) {
                    alert("Please enter a valid number.");
                
                // If second operand is also a valid number we check if operation is devision and the second operand is a 0.
                } else if (operator === '/' && secondOperand === 0) {
                    alert("Cannot divide by 0!");

                // If second operand is a valid and possible mathematical operation we execute the calculating logic.
                } else {
                    switch (operator) {
                        case "+":
                            result = firstOperand + secondOperand;
                            break;

                        case "-":
                            result = firstOperand - secondOperand;
                            break;

                        case "*":
                            result = firstOperand * secondOperand;
                            break;

                        case "/":
                            result = firstOperand / secondOperand;
                            break;

                    }
                    // Gives the final calculation to the user.
                    alert(`${firstOperand} ${operator} ${secondOperand} = ${result}`);
                }

            }

        }

    }

// Invalid operator alert.
} else {
    alert("No such operator exists in the scope of this exercise.");
}