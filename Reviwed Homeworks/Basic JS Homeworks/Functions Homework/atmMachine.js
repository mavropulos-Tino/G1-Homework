let balance = 500;

function validateInput(input) {
    if (Number.isNaN(input) || input < 0) {
        return false;
    } else {
        return true;
    }
}

function withdrawMoney(withdrawAmount) {
    if (!(withdrawAmount > balance)) {
        let newBalance = balance - withdrawAmount;
        return `$${withdrawAmount} withdrawn, $${newBalance.toFixed(2)} remaning.`;     
    } else {
        return (`Not enough money in acount to support withdraw amount. Balance: ${balance}`);
    }
}

let withdrawAmount = parseFloat(prompt("Enter how much money you want to withdraw from your acount:"));

if (validateInput(withdrawAmount)) {
    console.log(withdrawMoney(withdrawAmount));
} else {
    console.log("Not a valid input.");
}