// Number input.
let input = prompt("Enter a number:");

// We are checking if the user returned an empty string ' ' (null).
if (input === null || ' ') {
    alert("Please enter a valid input.");

} else {
    //Turns the input into a number.
    let number = parseInt(input);

    //If the input was an actual string it turns it into a NaN which gets caught by Number.isNaN() and alerts user.
    if (Number.isNaN(number)) {
        alert("Please enter a valid number.");

    } else {
        //If the prompt input string was an intager the main script logic executes.
        // Checks if number is 0
        if (!(number === 0)) {
            // Logic for Even number
            if (number % 2 === 0) {
                if(number > 0) {
                    alert(`${number} is an even and a positive number`); 
                } else {
                    alert(`${number} is an even and a negative number`);
                }

            // Logic for Odd number
            } else {
                if(number > 0) {
                    alert(`${number} is an odd and a positive number`);
                } else {
                    alert(`${number} is an odd and a negative number`);
                }
            }

        } else {
            alert('Your number is 0');
        }
    }
}