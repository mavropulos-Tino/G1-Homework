function Book(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
    this.getReadingStatus = function() {
        if(this.readingStatus) {
            return `${this.title} by ${this.author} has already been read.`;
        } else {
            return `${this.title} by ${this.author} has not been read.`
        }
    }
}

let book1 = new Book("The Robots of Dawn", "Isaac Asimov", true);
let book2 = new Book("Mockingjay", "Suzanne Collins", false);

console.log(book1.getReadingStatus());
console.log(book2.getReadingStatus());