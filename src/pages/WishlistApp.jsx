import { Component } from 'react'

import bookService from '../services/book.service'

import List from '../cmps/List.jsx'

export default class WishlistApp extends Component {

  state = {
    books: null,
  }

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks = () => {
    bookService.getBooks()
      .then(books => this.setState({ books }))
  }
  selectBook = (idx) => {
    console.log("file: line 22 - WishlistApp - Selecting book idx-", idx)

  }
  render() {
    const { books } = this.state
    return (
      books && <section className="wishlist-app">
        <section className="wishlist">
          <h1>Wishlist :</h1>
          <List selectItem={this.selectBook} className='book-preview'>{books}</List>
        </section>
      </section>
    )
  }
}