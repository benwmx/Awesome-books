/* eslint-disable no-unused-vars */
/* global Collection */
const collection = new Collection();
const button = document.getElementById('button');

collection.showCollection();
button.addEventListener('click', () => {
collection.addBook();
});

const removeBook = (id) => {
collection.removeBook(id);
};