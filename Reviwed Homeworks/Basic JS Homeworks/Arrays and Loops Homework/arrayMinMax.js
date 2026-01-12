function calculateSum(array) {
    let min = Infinity;
    let max = -Infinity;

    for(let i=0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    let sum = min+max;
    return `Sum: ${sum}  Min: ${min}  Max: ${max}`;
}

console.log(calculateSum([3, 5, 6, 8, 11, 6, 18, 93, 2, 14]));