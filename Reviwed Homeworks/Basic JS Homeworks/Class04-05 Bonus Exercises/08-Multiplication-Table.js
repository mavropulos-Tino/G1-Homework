function multiplicationTable(number) {
    for(let i=1; i<=10; i++) {
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}

let number = prompt("Enter a number:")
multiplicationTable(number);