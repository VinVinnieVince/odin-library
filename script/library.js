const library = []

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLib (title, author, pages) {
    const newBook = new Book (title, author, pages);

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

let indexCounter = 0
function addBookToWebpage(title, author, pages) {
    const bookContainer = document.createElement('div');
    // h1 for website titles, h2 for sub-headings, hence h3 for book titles
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const removeBtn = document.createElement('button');
 
    // to ensure removeBtn doesn't reference the original indexCounter - the book id will be specific to *that* book
    const index = +indexCounter

    bookContainer.id = 'book-' + index;

    bookTitle.textContent = title;
    bookAuthor.textContent = author;
    bookPages.textContent = 'Pages: ' + pages;
    removeBtn.textContent = 'Remove';


    removeBtn.addEventListener('click', () => {
        document.getElementById('book-' + index).remove();
    });

    libraryContainer.appendChild(bookContainer);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookPages);
    bookContainer.appendChild(removeBtn);

    indexCounter++;
}

for (book in library) {
    addBookToWebpage(library[book].title, library[book].author, library[book].pages);
}

const dialog = document.querySelector('dialog');
const openBtn = document.querySelector('.bookFormOpen');
const closeBtn = document.querySelector('.bookFormClose');
const submitBtn = document.querySelector('.bookSubmit');

openBtn.addEventListener('click', () => {
    dialog.showModal();
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
})

function submitBook () {
    const newTitle = document.getElementById('title');
    const newAuthor = document.getElementById('author');
    const newPages = document.getElementById('pages');

    addBookToLib(newTitle.value, newAuthor.value, newPages.value);
    addBookToWebpage(newTitle.value, newAuthor.value, newPages.value);

    // Reset forms in case another book to add
    newTitle.value = '';
    newAuthor.value = '';
    newPages.value = '';

    newTitle.focus();
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    submitBook();
})