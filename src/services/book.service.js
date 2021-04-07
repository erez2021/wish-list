import axios from 'axios'

const BOOKS_KEY = 'books'
const gBooks = require('../data/book.json');



export default {
    getBooks,
}

getBooks()
function getBooks() {
    var books = JSON.parse(localStorage.getItem(BOOKS_KEY))
    if (!books) {
        // return axios.get(`http://s3.amazonaws.com/sundaysky-mock/books/noListOfBooks.json`)
        //     .then(res => {
        //         console.log('Service Got Res:', res.data);
        //         books = res.data;
        //         localStorage.setItem(BOOKS_KEY, JSON.stringify(books))
        //     })
        //     .catch(err => {
        //         console.log('Service got Error:cannot get books', err);
        //     })
        return Promise.resolve(gBooks)
    } return books
}
