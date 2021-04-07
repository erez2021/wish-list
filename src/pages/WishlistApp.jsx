import { Component } from 'react'

import bookService from '../services/book.service'

import BookList from '../cmps/BookList.jsx'

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

  render() {
    const { books } = this.state
    return (
      books && <section className="wishlist-app">
        <BookList>{books}</BookList>
      </section>
    )
  }
}