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

const libraryContainer = document.querySelector('.libraryContainer');

function displayBooks () {
    libraryContainer.textContent = '';

    for (book in library) {
        const bookContainer = document.createElement('div');
        // h1 for website titles, h2 for sub-headings, hence h3 for book titles
        const bookTitle = document.createElement('h3');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');

        bookTitle.textContent = library[book].title;
        bookAuthor.textContent = library[book].author;
        bookPages.textContent = 'Pages: ' + library[book].pages;

        libraryContainer.appendChild(bookContainer);
        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookPages);

        console.table(library[book]);
    }
}

displayBooks();