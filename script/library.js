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