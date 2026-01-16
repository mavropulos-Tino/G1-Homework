const body = document.querySelector('body');
const button = document.getElementById('changeBtn');

const div1 = body.firstElementChild.nextElementSibling;
const div2 = body.lastElementChild.previousElementSibling.previousElementSibling;
const div3 = body.lastElementChild.previousElementSibling;

function changeHTML() {
    div1.firstElementChild.innerHTML += ' | (Updated)';
    div1.lastElementChild.innerHTML += ' | (Updated)';
    
    div2.firstElementChild.innerHTML += ' | (Updated)';
    div2.lastElementChild.innerHTML += ' | (Updated)';

    div3.firstElementChild.innerHTML += ' | (Updated)';
    div3.lastElementChild.innerHTML += ' | (Updated)';

    button.parentNode.removeChild(button);
}