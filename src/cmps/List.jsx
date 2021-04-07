import React, { Component } from 'react'

import BookPreview from './BookPreview.jsx'

export default class BookList extends Component {
    state = {
        selectedBook: null
    }
    render() {
        return <div className="list-container" >
            {
                this.props.children.map((book, idx) =>
                (< div className={this.props.className} tabIndex="0" key={book.title} onClick={() => { this.props.selectItem(idx) }}>
                    {book.title}
                </div>)
                )
            }
        </div >

    }
}