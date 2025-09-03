const library = document.querySelector('.library');
const shelf = document.querySelector('.shelf');
const addBook = document.querySelector('.new');
const deleteBook = document.querySelector('.delete');

const testDiv = document.createElement("div");
testDiv.textContent = "A New Book!";
shelf.appendChild(testDiv);

const myBooks = [
    // new Book objects
];

function Book(title, author, page) {
    this.title=title;
    this.author=author;
    this.page=page;

    this.info=function(){
        return `Title: ${this.title} ` + `Author: ${this.author} ` + `Page: ${this.page}`;
    }
}

function addBookToLibrary(book) {
    Book.call(this, title, author, page);
    // new book object gets pushed to array
    myBooks.push(book)
}

const monteCristo = new Book("The Count of Monte Cristo", "Alexandre Dumas", "1000");
shelf.textContent = monteCristo.info();

let inputBook = addBook.addEventListener("click",(title, author, page)=>{
    this.title=prompt("Title");
    this.author=prompt("Author");
    this.page=prompt("Pages");

    this.newBook = new Book(this.title, this.author, this.page);
    this.info = function(){
        return `Title: ${this.title} ` + `Author: ${this.author} ` + `Page: ${this.page}`;
    }

    let div=document.createElement('div');
    div.textContent = newBook.info();
    shelf.appendChild(div);
    
})