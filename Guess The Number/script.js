function replayGame() {
    let flag = true;
    while(flag) {
        let playAgain = prompt("Do you want to play again? (yes / no)".trim().toLowerCase());
        switch(playAgain) {
            case 'yes':
                advancedGuessingGame();
                break;
            case 'no':
                flag = false;
                break;
            default:
                break;
        }
    }
}
function advancedGuessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1; // Generates the hidden number
    let winFlag = false; // Flips to True if win conditions are met
    let errorChoosingDiffculty = false; // Cancles game if invalid difficulty is chosen

    let guessHistory = []; // Where users previous guesses are stored

    const feedbackMessages = [
        // 1–5
        [
            "That was almost it!",
            "You’re one step away!",
            "So close it hurts!"
        ],
        // 6–10
        [
            "Nice try! You’re getting warmer!",
            "Not quite, but you’re closing in!",
            "You’re on the right track!"
        ],
        // 11–15
        [
            "Hmm… not too close, but not terrible either.",
            "You’re in the general area.",
            "A bit off, but keep guessing!"
        ],
        // 16+
        [
            "Way off! The number is hiding from you!",
            "Cold guess! You’re far from the target.",
            "Not even close, try a totally different number."
        ]
    ]; // User guess feedback message templates

    function validateUserGuess(input) {
        let guess = parseInt(input);

        if(isNaN(guess)) {
            return false;
        }
        if(guess.toString() !== input) { // Checking if user typed for ex. 10abc and return false if its true
            return false;
        }

        if(guess < 1 || guess > 100) {
            return false;
        }
        return true;
    }
    function playerNamePrompt() {
        let name = prompt("Enter Your Username:");
        alert(`Welcome ${name}! Let’s play Guess the Number!`);
        return name;
    }
    function difficultyPrompt() {
        let difficulty= prompt("Choose the game difficulty ('easy', 'medium', 'hard'):").trim().toLowerCase();

        switch(difficulty) {
            case 'easy':
                guessingGame(12);
                break;
            case 'medium':
                guessingGame(7);
                break;
            case 'hard':
                guessingGame(3);
                break;
            default:
                alert("Invalid Difficulty Choice");
                errorChoosingDiffculty = true;
                break;
        }
    }
    function getFeedbackMessage(distance) {
        let index; // Keeps track which gorup of messages needs to be displayed

        if (distance <= 5) {
            index = 0;
        } else if (distance <= 10) {
            index = 1;
        } else if (distance <= 15) {
            index = 2;
        } else index = 3;

        let messages = feedbackMessages[index]; // Sets the messages variable to have the array with the correct messages for the given distance of the guess
        return messages[Math.floor(Math.random() * messages.length)]; // Picks the random message from the correct group of messages
    }
    function guessingGame(tries) {
        let count = tries; // Keeps trakc of how many guesses we have left
        for(let i=0; i<tries; i++) {

            let guess = prompt(`Guess a number between 1 and 100, you have ${count} tries.`);

            if(validateUserGuess(guess)) { // Input validation
                guessHistory.push(parseInt(guess)); // If input is valid we add it to the guess history

                if(parseInt(guess) === secretNumber) {
                    alert(`🎉 YES! You got it! That’s the number!`);
                    winFlag = true;
                    return;
                } else {
                    let distance = Math.abs(secretNumber - parseInt(guess)); // We calculate the diference between the guess and the secret number
                    alert(getFeedbackMessage(distance)); // Display the random message dependant on the distance of the guess
                    count--; // Subtract 1 from the total ammount of tries the user has
                }
            }
        }
    }
    function gameResult(name) {
        if(winFlag) {
            alert(`🎉 Congratulations ${name}! You have guessed correct! The number was ${secretNumber}`);
        } else if(errorChoosingDiffculty) { // In place to prevent the script of alerting the user "game over" if he inputs the wrong difficulty in the prompt above
            return;
        } else {
            alert(`😢 Game over, ${name}. The number was ${secretNumber}. Better luck next time!`);
        }
        alert(`Here is your guess histroy: ${guessHistory}`);
    }

    console.log(secretNumber); // Cheat Toggle
    
    let name = playerNamePrompt();
    difficultyPrompt();
    gameResult(name);
}
advancedGuessingGame();
replayGame();