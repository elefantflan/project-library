const library = document.querySelector('.library');
const shelf = document.querySelector('.shelf');
const addBook = document.querySelector('.new');

const myBooks = [];


function Book(title, author, page,id) {
    this.title=title;
    this.author=author;
    this.page=page;
    this.id=id;

    this.info=function(){
        return `Title: ${this.title}\n` + `Author: ${this.author}\n` + `Pages: ${this.page}\n`;
    }
}

const monteCristo = new Book("The Count of Monte Cristo", "Alexandre Dumas", "1000", crypto.randomUUID());
const janeEyre = new Book('Jane Eyre', 'Charlotte Bronte', '500',crypto.randomUUID());
const orlando = new Book('Orlando', 'Virginia Woolfe', '450',crypto.randomUUID());

myBooks.push(monteCristo, janeEyre, orlando)
console.log(myBooks)

//add new books

function addNewBooks(){
    const bookInfo = addForm();

    const newBook=document.createElement('div');
    shelf.append(newBook);

    newBook.append(bookInfo);
}

function addForm(){
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
        const newBook = new Book (title.value, author.value, page.value, crypto.randomUUID())
        myBooks.push(newBook);
        console.group(myBooks);
    })

    return form;
}

addBook.addEventListener('click',()=>{
    addNewBooks();
})

// remove books
// button id matches array id
// remove array