let numbers = [2, 4, 5, 19];
let sum = 0;
let equation = "";

const arrayList = document.getElementById("arrayList");
const sumDisplay = document.getElementById("sumDisplay");
const equationDisplay = document.getElementById("equationDisplay");


for(let i=0; i<numbers.length; i++) {
    let li = document.createElement("li");
    li.textContent = numbers[i];
    arrayList.appendChild(li);

    sum += numbers[i];
    equation += numbers[i];

    if(i<numbers.length-1) {
        equation += " + ";
    }
}

sumDisplay.textContent = `Sum: ${sum}`;
equationDisplay.textContent = `Equation: ${equation} = ${sum}`; 