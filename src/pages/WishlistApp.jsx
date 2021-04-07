import { Component } from 'react'
import bookService from '../services/book.service'


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

    return (
      <div className="wishlist-app">

      </div>
    )
  }
}