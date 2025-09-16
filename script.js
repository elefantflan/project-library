const library = document.querySelector('.library');
const shelf = document.querySelector('.shelf');
const addBook = document.querySelector('.new');

const myBooks = [
    // new Book objects
];


function Book(title, author, page) {
    this.title=title;
    this.author=author;
    this.page=page;

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
        newDiv.dataset.id=uniqueID;
        newDiv.append(myBooks[i].info());
        shelf.append(newDiv);

        const btnRemove=addRemoveButton();
        btnRemove.dataset.id=uniqueID;
        newDiv.append(btnRemove);
    }
}

function addRemoveButton(){
    const deleteBook = document.createElement('button');
    deleteBook.textContent='Remove'
    return deleteBook;
}

//add new books

addExampleBooks();

function addNewBooks(){
    const bookInfo = addForm();

    const uniqueID=crypto.randomUUID();

    const newBook=document.createElement('div');
    newBook.dataset.id=uniqueID;
    shelf.append(newBook);
    
    const btnRemove=addRemoveButton();
    btnRemove.dataset.id=uniqueID;
    newBook.append(bookInfo);
    newBook.append(btnRemove);

    myBooks.push(newBook)
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
    })

    return form;
}

addBook.addEventListener('click',()=>{
    addNewBooks();
})