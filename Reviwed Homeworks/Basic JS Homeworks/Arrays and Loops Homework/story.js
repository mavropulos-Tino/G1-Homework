function tellStory() {
  let inputs = getInputs();
  if(inputs) {
    return `This is ${inputs[0]}. ${inputs[0]} is a nice person. Today he/she is ${inputs[1]}. He/She is ${inputs[2]} all day. The end.`;
  } else {
    return "Invalid input.";
  }
}

function validateString(string) {
  if (!Number.isInteger(parseInt(string)) && string !== null && string !== '') {
    return true;
  } else {
    return false;
  }
}

function getInputs() {
  const questions = ["Enter a name:", "Enter a mood:", "Enter an activity:"];
  let inputs = [];

  for(let i=0; i<questions.length; i++) {
    let answer = prompt(questions[i]);
    if (validateString(answer)) {
      inputs.push(answer);
    } else {
      return false;
    }
  }
  return inputs;
}

console.log(tellStory());