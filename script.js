const library = document.querySelector('.library');
const shelf = document.querySelector('.shelf');
const addBook = document.querySelector('.new');
const deleteBook = document.querySelector('.delete');

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

function addBookToLibrary() {
    // new book object gets pushed to array
    myBooks.push(newBook.info());
    console.log(myBooks);
}

const monteCristo = new Book("The Count of Monte Cristo", "Alexandre Dumas", "1000");
const example = document.createElement('div');
shelf.appendChild(example);
example.textContent = monteCristo.info();

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

    let deleteBook=document.createElement('button');
    deleteBook.textContent='remove';
    div.appendChild(deleteBook);

    addBookToLibrary();
})



// practice
function Item (name, age){
    this.name=name;
    this.age=age;
    this.info=function(){
        return `This ${this.name} is\n${this.age} years old`
    }
}

const corn = new Item("canned corn", 6);
console.log(corn.info());