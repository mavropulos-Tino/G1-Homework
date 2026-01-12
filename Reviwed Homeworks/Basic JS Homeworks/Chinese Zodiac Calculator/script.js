let birthYear = prompt("What year were you born?");

if (!Number.isNaN(parseInt(birthYear))) {

    let zodiacNumber = (parseInt(birthYear) - 4) % 12;

    if (zodiacNumber === 0) {
        alert('Your Chinese zodiac is a Rat');
    } else if (zodiacNumber === 1) {
        alert('Your Chinese zodiac is an Ox');
    } else if (zodiacNumber === 2) {
        alert('Your Chinese zodiac is a Tiger');
    } else if (zodiacNumber === 3) {
        alert('Your Chinese zodiac is a Rabbit');
    } else if (zodiacNumber === 4) {
        alert('Your Chinese zodiac is a Dragon');
    } else if (zodiacNumber === 5) {
        alert('Your Chinese zodiac is a Snake');
    } else if (zodiacNumber === 6) {
        alert('Your Chinese zodiac is a Horse');
    } else if (zodiacNumber === 7) {
        alert('Your Chinese zodiac is a Goat');
    } else if (zodiacNumber === 8) {
        alert('Your Chinese zodiac is a Monkey');
    } else if (zodiacNumber === 9) {
        alert('Your Chinese zodiac is a Rooster');
    } else if (zodiacNumber === 10) {
        alert('Your Chinese zodiac is a Dog');
    } else if (zodiacNumber === 11) {
        alert('Your Chinese zodiac is a Pig');
    }

} else if (birthYear === null) {
    alert("Please enter a valid input!");

} else {
    alert("Not a valid number!");
}