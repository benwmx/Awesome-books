/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* global Collection */
const collection = new Collection();
const button = document.getElementById('button');
const buttonList = document.getElementById('list');
const buttonAdd = document.getElementById('add');
const buttonContact = document.getElementById('contact');
const error = document.getElementById('error-msg');
const arrowList = document.getElementById('arrow-list');
const counterShow = document.getElementById('counter-show');

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

const validateEmpty = () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  let isEmpty = false;

  if (title.value.trim().length === 0 || author.value.trim().length === 0) {
    isEmpty = true;
    return isEmpty;
  }

  return isEmpty;
};

const showError = () => {
  error.classList.remove('d-none');
};

const hideError = () => {
  error.classList.add('d-none');
};

const counter = {
  addOne: () => {
    counterShow.innerText = parseInt(counterShow.innerText.trim(), 10) + 1;
  },
  reset: () => {
    counterShow.innerText = '0';
  },
};

buttonList.addEventListener('click', () => {
  counter.reset();
  showContent('list');
});
buttonAdd.addEventListener('click', () => {
  showContent('add');
});
buttonContact.addEventListener('click', () => {
  showContent('contact');
});

button.addEventListener('click', () => {
  if (validateEmpty()) {
    showError();
  } else {
    hideError();
    collection.addBook();
    counter.addOne();
  }
});

arrowList.addEventListener('click', () => {
  showContent('list');
  counter.reset();
});

const removeBook = (id) => {
  collection.removeBook(id);
};

collection.showCollection();

// Show the Time
const dateTime = luxon.DateTime;
const time = document.getElementById('time');

const showTime = () => {
  time.innerText = dateTime.now().toLocaleString(dateTime.DATETIME_MED);
};

window.setInterval(showTime, 2000);
