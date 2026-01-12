function capitalizeIfLong(string) {
  if (!validateString(string)) {
    return null;
  }
  if (string.length < 5) {
    return string;
  }
  let firstLetter = string.charAt(0).toUpperCase();
  return `${firstLetter}${string.slice(1)}`;
}

function validateString(string) {
  if (string !== null && string !== ' ' && !Number.isNaN(parseInt(String))) {
    return true;
  }
}

let string = prompt("Enter a string:")
console.log(capitalizeIfLong(string));