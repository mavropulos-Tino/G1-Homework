// Using an object literal
let animal = {
    name: "Jasper",
    kind: "Dog",
    speak: function(message) {
        return `${this.name} the ${this.kind} says: '${message}'`;
    }
}
console.log(animal.speak("Hey bro!"));


// Using a Constructor / Object template
function Animal(name, kind) {
    this.name = name;
    this.kind = kind;
    this.speak = function(message) {
        return `${this.name} the ${this.kind} says: '${message}'`;
    }
}
let dog = new Animal("Jasper", "Dog");
console.log(dog.speak("Hey bro!"));