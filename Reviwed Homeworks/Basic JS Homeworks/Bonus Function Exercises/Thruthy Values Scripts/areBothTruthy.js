function getInputs() {
  const inputA = prompt("Enter value A:");
  const inputB = prompt("Enter value B:");

  const a = parseInput(inputA);
  const b = parseInput(inputB);

  return areBothTruthy(a, b);
}

function parseInput(value) {
    if (value === null || value === "") {
        return null;
    }
    const numberValue = parseInt(value);

    if (!Number.isNaN(numberValue)) {
        return numberValue;
    }
    return value;
}

function areBothTruthy(a, b) {
    if (a && b) {return true;}
    else {return false;}
}

console.log(getInputs());