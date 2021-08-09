/* eslint-disable no-unused-vars */
let books = [];
const removeBook = (id) => {
  // if(id !== null){
  const button = document.getElementById(id);
  const divBooks = document.getElementById('books');
  books = JSON.parse(localStorage.getItem('books'));
  const filtredBooks = [];
  books.forEach((book) => {
    if (book.id !== parseInt(id, 10)) filtredBooks.push(book);
  });
  localStorage.setItem('books', JSON.stringify(filtredBooks));
  divBooks.removeChild(button.parentElement);
};
