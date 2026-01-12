let input = prompt("Enter your age:");

if (input === null) {
  alert("Please enter a valid input.");

} else {
  let age = parseInt(input);
  
  if (Number.isNaN(age) || age <= 0) {
    alert("Please enter a valid age.");

  } else if (age < 13) {
    alert(`At the age of ${age} you are a child.`);

  } else if (age <= 17) {
    alert(`At the age of ${age} you are a teenager.`);

  } else {
    alert(`At the age of ${age} you are an adult.`);
    
  }
}

