import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  constructor(props) {
    super(props)
    this.state = {
      book: props.book
    }
  }

  handleChange = event => {
    let shelf = event.target.value
    BooksAPI.update(this.state.book, shelf)
      .then(resp => {
        let newBook = this.state.book
        newBook.shelf = shelf
        this.setState({book: newBook})
        this.props.onMoveBook(resp)
      })
  }
  render() {
    const book = this.state.book
    let shelf = book.shelf
    if (!shelf) {
      shelf = 'none'
    }
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ''})` }}></div>
            <div className="book-shelf-changer">
              <select value={shelf} onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {
            book.authors && book.authors.length > 0 &&
              book.authors.map(author => {
                return (
                  <div key={author} className="book-authors">{author}</div>
                )
              })
          }
        </div>
      </li>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired
}
export default Book