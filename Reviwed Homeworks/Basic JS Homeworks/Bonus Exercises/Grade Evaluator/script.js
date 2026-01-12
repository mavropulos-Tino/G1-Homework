let scoreInput = prompt("Enter a score between 0 and 100:");
let grade;

if (scoreInput === null || scoreInput === ' ') {
    alert("Field cannot be empty!");

} else {
    let score = parseInt(scoreInput);
    if (Number.isNaN(score)) {
        alert("Please enter a valid score bwteen 0 and 100 (NaN).");

    } else if (score < 0) {
    alert("Please enter a valid score between 0 and 100.")

    } else if (score < 60) {
        grade = 'F';
        alert(`Your score is ${score} and your grade is ${grade}.`);

    } else if (score <= 69) {
        grade = 'D';
        alert(`Your score is ${score} and your grade is ${grade}.`);

    } else if (score <= 79) {
        grade = 'C';
        alert(`Your score is ${score} and your grade is ${grade}.`);

    } else if (score <= 89) {
        grade = 'B';
        alert(`Your score is ${score} and your grade is ${grade}.`);

    } else if (score <= 100) {
        grade = 'A';
        alert(`Your score is ${score} and your grade is ${grade}.`);

    } else {
        alert("Please enter a valid score between 0 and 100.")

    } 
}