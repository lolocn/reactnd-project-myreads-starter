import React, { Component } from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types'
class BookShelf extends Component {

  handleMove = resp => {
    this.props.onMoveBook(resp)
  }
  render() {
    const {title, books} = this.props
    return(
      <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map(b => {
                return(
                  <Book key={b.id} book={b} onMoveBook={this.handleMove}/>
                )
              })
            }           
          </ol>
        </div>
      </div>
    )
  }
}
BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
}
export default BookShelf