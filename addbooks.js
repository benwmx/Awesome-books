let books = [];

const showBooks = () => {
  const storedBooks = JSON.parse(localStorage.getItem('books'));
  if (storedBooks !== null) {
    document.getElementById('books').innerHTML = '';
    for (let i = 0; i < storedBooks.length; i += 1) {
      const divBooks = document.getElementById('books');
      const book = document.createElement('div');
      const title = document.createElement('p');
      const author = document.createElement('p');
      const line = document.createElement('hr');
      const button = document.createElement('button');
      title.innerText = storedBooks[i].title;
      author.innerText = storedBooks[i].author;
      button.innerText = 'Remove';
      button.setAttribute('id', storedBooks[i].id);
      book.appendChild(title);
      book.appendChild(author);
      book.appendChild(button);
      book.appendChild(line);
      divBooks.appendChild(book);
    }
  }
};

const addBook = () => {
  books = JSON.parse(localStorage.getItem('books'));
  const book = {};
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  book.title = title.value;
  book.author = author.value;
  if (books === null) {
    book.id = '1';
    books = [];
  } else {
    book.id = parseInt(books[books.length - 1].id, 10) + 1;
  }
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  showBooks();
};

showBooks();

const button = document.getElementById('button');
button.addEventListener('click', addBook);