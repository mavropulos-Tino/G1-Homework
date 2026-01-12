function typeFunction(input) {
    return `${typeof input}: ${input}`;
}

console.log(typeFunction({}));
console.log(typeFunction(true));
console.log(typeFunction(10));
console.log(typeFunction("Hello World"));
console.log(typeFunction(undefined));