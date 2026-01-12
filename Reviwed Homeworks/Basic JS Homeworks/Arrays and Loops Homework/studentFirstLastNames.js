function formatNames(firstNames, lastNames) {
    let full = [];
    for(let i=0; i < firstNames.length; i++) {
        full.push(`${i+1}. ${firstNames[i]} ${lastNames[i]}`);
    }

    return full;
}

console.log(formatNames( ["Bob",     "Jill",  "Jeremy", "Adam",    "Jhon"], 
                         ["Gregory", "Wurtz", "Addams", "Jackson", "Williams" ]));