const library = document.querySelector('.library');
const shelf = document.querySelector('.shelf');
const addBook = document.querySelector('.new');

const myBooks = [];

function Book(title, author, page, id) {
    this.title=title;
    this.author=author;
    this.page=page;
    this.id=id;

    this.info=function(){
        return `Title: ${this.title}\n` + `Author: ${this.author}\n` + `Pages: ${this.page}\n`;
    }
}

const monteCristo = new Book("The Count of Monte Cristo", "Alexandre Dumas", "1000");
const janeEyre = new Book('Jane Eyre', 'Charlotte Bronte', '500');
const orlando = new Book('Orlando', 'Virginia Woolfe', '450');

myBooks.push(monteCristo, janeEyre, orlando)
console.log(myBooks)

//add example books to library
function addExampleBooks() {
    // displays array as shelf
    for(i=0;i<myBooks.length;i++){
        const uniqueID=crypto.randomUUID();

        const newDiv=document.createElement('div');
        newDiv.className="book";
        newDiv.dataset.id=uniqueID;
        myBooks[i].id= uniqueID;
        newDiv.append(myBooks[i].info());
        shelf.append(newDiv);

        const btnRemove=addRemoveButton();
        btnRemove.dataset.id=uniqueID;
        newDiv.append(btnRemove);
        console.log(btnRemove.id);
    }
}


function addRemoveButton(){
    const deleteBook = document.createElement('button');
    deleteBook.className="remove";
    deleteBook.textContent='Remove'
    return deleteBook;
}

//add new books

addExampleBooks();

function addNewBooks(){
    const bookInfo = addForm();

    const uniqueID=crypto.randomUUID();

    const newBook=document.createElement('div');
    newBook.className="book";
    newBook.dataset.id=uniqueID;
    shelf.append(newBook);
    
    const btnRemove=addRemoveButton();
    btnRemove.dataset.id=uniqueID;
    btnIDs.push(btnRemove);

    newBook.append(bookInfo);
    newBook.append(btnRemove);
}
console.log(btnIDs);

function addForm(name, writer, pg){

    const form = document.createElement('div');

    const titleLabel = document.createElement('label');
    titleLabel.textContent='Title: '
    const title = document.createElement('input');
    title.type='text';
    title.placeholder='Title: ';
    title.id='title';
    title.name='title';

    const authorLabel = document.createElement('label');
    authorLabel.textContent='Author: '
    const author = document.createElement('input');
    author.type='text';
    author.placeholder='Author: ';
    author.id='author';
    author.name='author';

    const pageLabel = document.createElement('label');
    pageLabel.textContent='Pages: '
    const page = document.createElement('input');
    page.type='text';
    page.placeholder='Pages: ';
    page.id='pages'
    page.name='pages'

    const btnSubmit = document.createElement('button')
    btnSubmit.textContent='Add';
    btnSubmit.type='submit';

    form.append(titleLabel);
    form.append(title);
    form.append(authorLabel);
    form.append(author);
    form.append(pageLabel);
    form.append(page);
    form.append(btnSubmit);

    btnSubmit.addEventListener('click', ()=>{
        const result = `Title: ${title.value}\n` + `Author: ${author.value}\n` + `Pages: ${page.value}\n`
        form.textContent=result;
        const newBookObject = new Book(addForm(title.value), addForm(author.value), addForm(page.value));
        myBooks.push(newBookObject);
        console.log(myBooks)
    })
    return form;
}

addBook.addEventListener('click',()=>{
    addNewBooks();
})

const books = document.querySelectorAll('.book');
books.forEach((book)=>{
    console.log(book);
    console.log(book.id);
})

// get ID
const idList=myBooks.map(book=>book.id);
console.log(idList)
const titleList=myBooks.map(book=>book.title);
console.log(titleList)
const authorList =myBooks.map(book=>book.author);
console.log(authorList)
const appendID = myBooks.forEach(book=>book.id );