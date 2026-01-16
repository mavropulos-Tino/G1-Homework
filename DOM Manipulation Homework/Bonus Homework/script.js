

const body = document.querySelector('body');
let recipeName = prompt("Enter the name of your recipe:");

let h1 = document.createElement('h1');
h1.innerHTML = recipeName;
body.appendChild(h1);

let count = prompt("How many ingredients do you need for the recipe:");

// ===== Using Tables =====
function createRow(ingredient) {
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let th = document.createElement('th');
    th.innerHTML = ingredient;
    tr.appendChild(th);
}
let table = document.createElement('table');
body.appendChild(table);
for(let i=0; i<count; i++) {
    let ingredient = prompt(`Enter ingredient num.${count}`);

    createRow(ingredient);
}

// ===== Using ul and li =====
// let ul = document.createElement('ul');
// body.appendChild(ul);

// for(let i=0; i<count; i++) {
//     let ingredient = prompt(`Enter ingredient num.${count}`);

//     let li = document.createElement('li');
//     li.innerHTML = ingredient;
//     ul.appendChild(li);
// }