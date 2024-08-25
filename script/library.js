const library = []

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLib (input) {
    const book = new Book (input.title, input.author, input.pages);

    library.push(book);
}

let book = new Book (
    '1984', 
    'George Orwell', 
    328);
library.push(book);

book = new Book (
    'Being Mortal', 
    'Atul Gawande', 
    304);
library.push(book);

book = new Book (
    'A Little Life', 
    'Hanya Yanagihara', 
    814);
library.push(book);

book = new Book (
    'The Winds of Winter', 
    'George R. R. Martin', 
    '???');
library.push(book);