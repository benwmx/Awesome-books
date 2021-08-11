/* eslint-disable no-unused-vars */

/* global Book */

class Collection {
  constructor() {
    this.collection = [];
  }

  getStorage() {
    this.collection = JSON.parse(localStorage.getItem('books'));
    if (this.collection === null) this.collection = [];
  }

  updateStorage() {
    localStorage.setItem('books', JSON.stringify(this.collection));
  }

  showCollection() {
    document.getElementById('books').innerHTML = '';
    this.getStorage();
    for (let i = 0; i < this.collection.length; i += 1) {
      const divBooks = document.getElementById('books');
      const book = document.createElement('div');
      const info = document.createElement('div');
      const titleAuthor = document.createElement('div');
      const title = document.createElement('p');
      const author = document.createElement('p');
      const by = document.createElement('p');
      const line = document.createElement('hr');
      const button = document.createElement('button');
      title.innerText = this.collection[i].title;
      title.className = 'title';
      by.innerText = 'by';
      author.className = 'author';
      author.innerText = this.collection[i].author;
      button.className = 'remove';
      button.innerText = 'Remove';
      button.setAttribute('id', this.collection[i].id);
      button.setAttribute('onclick', 'removeBook(this.id)');
      info.className = 'info';
      titleAuthor.className = 'title-author';
      titleAuthor.appendChild(title);
      titleAuthor.appendChild(by);
      titleAuthor.appendChild(author);
      info.appendChild(titleAuthor);
      info.appendChild(button);
      book.className = 'book';
      book.className += ' book'.concat(this.collection[i].id);
      book.appendChild(info);
      book.appendChild(line);
      divBooks.appendChild(book);
    }
  }

  addBook() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    let id = 0;
    this.getStorage();
    if (this.collection === null || this.collection.length === 0) {
      id = 1;
    } else {
      id = this.collection.length + 1;
    }
    this.collection.push(new Book(title.value, author.value, id));
    this.updateStorage();
    this.showCollection();
  }

  removeBook(id) {
    const button = document.getElementById(id);
    const divBooks = document.getElementById('books');
    const filtredCollection = [];
    this.collection.forEach((book) => {
      if (book.id !== parseInt(id, 10)) filtredCollection.push(book);
    });
    divBooks.removeChild(button.parentElement.parentElement);
    this.collection = filtredCollection;
    this.updateStorage();
    this.showCollection();
  }
}