function replayGame() {
    let flag = true;
    while(flag) {
        let playAgain = prompt("Do you want to play again? (yes / no)".trim().toLowerCase());
        switch(playAgain) {
            case 'yes':
                rockPaperScissorsGame();
                break;
            case 'no':
                flag = false;
                break;
            default:
                break;
        }
    }
}
function rockPaperScissorsGame() {
    function validatePlayerChoice(input) {
        let choice = parseInt(input);

        if(isNaN(choice)) {
            return false;
        }
        if(choice.toString() !== input) {
            return false;
        }
        if(choice < 1) {
            return false;
        }
        return true;
    }
    function getComputerChoice() {
        let choices = ["rock", "paper", "scissors"];

        let index = Math.floor(Math.random() * choices.length);
        return choices[index];
    }
    function getPlayerChoice() {
        let answerValidFlag = true;

        while(answerValidFlag) {
            let playerChoice = prompt("Choose rock, paper, or scissors:");
            if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
                answerValidFlag = false;
                return playerChoice;
            } else {
                alert("Invalid choice!");
                answerValidFlag = true;
            }
        }
    }
    function checkWinner(playerScore, computerScore, roundsPlayed, totalRounds, name) {
        let remainingRounds = totalRounds - roundsPlayed;

        if (playerScore > computerScore + remainingRounds) {
            alert(`🎉 Congratulations ${name}! You won the tournament ${playerScore}-${computerScore} out of ${totalRounds} rounds!`);
            return true;
        }

        if (computerScore > playerScore + remainingRounds) {
            alert(`💻 Game over! The computer won the tournament ${playerScore}-${computerScore} out of ${totalRounds} rounds.`);
            return true;
        }

        return false;
    }
    function playRound(rounds) {
        let playerScore = 0;
        let computerScore = 0;
        let roundsPlayed = 0;

        

        while (roundsPlayed < rounds) {
            let computerChoice = getComputerChoice();
            let playerChoice = getPlayerChoice();

            if (playerChoice === computerChoice) {
                alert(`🤝 It’s a tie! Try again!`);
                continue;
            }

            roundsPlayed++;

            if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
                playerScore++;
                scoreboard(1, name);
                alert(`🎉 You win this round! Nice one, ${name}! | Score: ${name} ${playerScore} – Computer ${computerScore}`);
            } else {
                computerScore++;
                scoreboard(2);
                alert(`💻 Computer takes this round! Don’t give up! | Score: ${name} ${playerScore} – Computer ${computerScore}`);
            }
            if (checkWinner(playerScore, computerScore, roundsPlayed, rounds, name)) {
                return;
            }
        }

        if (playerScore > computerScore) {
            alert(`🎉 Congratulations ${name}! You won the tournament ${playerScore}-${computerScore}!`);
        } else if (computerScore > playerScore) {
            alert(`💻 Game over! The computer won the tournament ${playerScore}-${computerScore}.`);
        } else {
            alert(`🤝 It’s a tie tournament! Both scored ${computerScore}.`);
            displayScoreboard(roundsPlayed);
        }
    }
    function playerNamePrompt() {
        let name = prompt("Enter your username:");
        alert(`Welcome ${name}! Get ready for Rock–Paper–Scissors!`);
        return name;
    }
    function gameRoundsPrompt() {
        for(let i=0; i<1; i++) {
            let rounds = prompt("Enter how many rounds you want to play:").trim();
            if(validatePlayerChoice(rounds)) {
                return rounds;
            } else {
                alert(`${rounds} is an invalid round ammout chocie!`);
                i--;
            }
        }
    }

    let name = playerNamePrompt();
    let rounds = gameRoundsPrompt();
    playRound(rounds);
}
rockPaperScissorsGame();
replayGame();