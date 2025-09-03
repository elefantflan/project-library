const library = document.querySelector('.library');
const shelf = document.querySelector('.shelf');
const addBook = document.querySelector('.new');
const deleteBook = document.querySelector('.delete');

const myBooks = ['monte', 'jane', 'hobbit'];

myBooks.forEach(item=>{
    const newBook = document.createElement("div");
    newBook.textcontent = item;
    shelf.appendChild(newBook);
});

function Book(title, author, page, read, id) {
    this.title=title;
    this.author=author;
    this.page=page;
    this.read=read;
    this.id=id;
}


function addBookToLibrary() {
    // new book object gets pushed to array
}

const monteCristo = new Book("The Count of Monte Cristo", "Alexandre Dumas", "1200", "read", "placeholder-ID")
console.log(monteCristo);