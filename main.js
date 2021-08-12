/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* global Collection */
const collection = new Collection();
const button = document.getElementById('button');
const buttonList = document.getElementById('list');
const buttonAdd = document.getElementById('add');
const buttonContact = document.getElementById('contact');

const showContent = (content) => {
  const list = document.querySelector('.all-books');
  const add = document.querySelector('.add-new-book');
  const contact = document.querySelector('.contact');
  if (content === 'list') {
    list.classList.remove('d-none');
    add.classList.add('d-none');
    contact.classList.add('d-none');
    collection.showCollection();
  }
  if (content === 'add') {
    list.classList.add('d-none');
    add.classList.remove('d-none');
    contact.classList.add('d-none');
  }
  if (content === 'contact') {
    list.classList.add('d-none');
    add.classList.add('d-none');
    contact.classList.remove('d-none');
  }
};

buttonList.addEventListener('click', () => {
  showContent('list');
});
buttonAdd.addEventListener('click', () => {
  showContent('add');
});
buttonContact.addEventListener('click', () => {
  showContent('contact');
});

button.addEventListener('click', () => {
  collection.addBook();
  showContent('list');
});

const removeBook = (id) => {
  collection.removeBook(id);
};

collection.showCollection();
const dateTime = luxon.DateTime;
const time = document.getElementById('time');
const showTime = () => {
  time.innerText = dateTime.now().toLocaleString(dateTime.DATETIME_MED);
};

window.setInterval(showTime, 2000);