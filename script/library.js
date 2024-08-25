const library = []

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLib (input) {
    const newBook = new Book (input.title, input.author, input.pages);

    library.push(newBook);
}

let exampleBook = new Book (
    '1984', 
    'George Orwell', 
    328);
library.push(exampleBook);

exampleBook = new Book (
    'Being Mortal', 
    'Atul Gawande', 
    304);
library.push(exampleBook);

exampleBook = new Book (
    'A Little Life', 
    'Hanya Yanagihara', 
    814);
library.push(exampleBook);

exampleBook = new Book (
    'The Winds of Winter', 
    'George R. R. Martin', 
    '???');
library.push(exampleBook);