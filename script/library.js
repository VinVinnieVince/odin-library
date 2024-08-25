const library = []

function Book(title, author, pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
}

const libraryContainer = document.querySelector('.libraryContainer');

function addBookToWebpage(book) {
    const bookContainer = document.createElement('div');
    // h1 for website titles, h2 for sub-headings, hence h3 for book titles
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const removeBtn = document.createElement('button');

    bookContainer.id = 'book-' + String(book.id);

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = 'Pages: ' + book.pages;
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', () => {
        document.getElementById('book-' + String(book.id)).remove();
    });

    libraryContainer.appendChild(bookContainer);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookPages);
    bookContainer.appendChild(removeBtn);
}

let indexCount = 0
function addNewBook (title, author, pages) {
    // Assign ID & add book to library
    const newBook = new Book (title, author, pages, indexCount);
    library.push(newBook);

    addBookToWebpage(newBook);
    indexCount++;
}

// examples
addNewBook('1984', 'George Orwell', 328);
addNewBook('Being Mortal', 'Atul Gawande', 304);
addNewBook('A Little Life', 'Hanya Yanagihara', 814);
addNewBook('The Winds of Winter', 'George R. R. Martin', '???');

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

    addNewBook(newTitle.value, newAuthor.value, newPages.value);

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