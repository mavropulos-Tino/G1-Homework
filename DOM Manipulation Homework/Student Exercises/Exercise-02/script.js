function isNumber(input) {
    let number = parseInt(input);

    if(isNaN(number) || input === null) {
        return false;
    }
    if(number.toString().trim() !== input) {
        return false;
    }
    return true;
}

function weightInChickens (weight) {
    const chickenConstant = 0.5;
    let chickenWeight = weight / chickenConstant;

    result.innerHTML = `
        <h3> 
            At the weight of ${weight} kg's you weight that same as ${chickenWeight} chickens 
            <img src="chicken.png" style="height:5vh"> 
        </h3>
        `;
}

const result = document.getElementById('result');
let weight = prompt('Enter how much you weight in Kilograms:');

if(isNumber(weight)) {
    weightInChickens (weight);
} else {
    result.textContent = 'Sorry! Wrong input! Refresh the page again!';
}