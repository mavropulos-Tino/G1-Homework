function removeDuplicates(array) {
    let uniqueNumbersArray = [];

    for(let i=0; i<array.length; i++) {
        let currentNumber = array[i];
        let alreadyExists = false;

        for(let j=0; j<uniqueNumbersArray.length; j++) {
            if(currentNumber === uniqueNumbersArray[j]) {
                alreadyExists = true;
                break;
            }
        }
        if(alreadyExists) {
            continue;
        } else {
            uniqueNumbersArray.push(currentNumber);
        }
    }
    return uniqueNumbersArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 1]));
