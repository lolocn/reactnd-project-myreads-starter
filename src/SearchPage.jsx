import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.jsx'
import * as BooksAPI from './BooksAPI'
import { Debounce } from 'react-throttle'

class SearchPage extends Component {

  state = {
    books: []
  }

  handleChange = event => {
    let query = event.target.value
    let shelfBooks = this.props.location.state.shelfBooks

    if (query && query !== '') {
      BooksAPI.search(query)
        .then(books => {
          if (books && books.length > 0) {
            books.forEach(book => {
              let shelfBook = this.getShelfBookById(shelfBooks, book.id)
              if (shelfBook && shelfBook.id === book.id) {
                book.shelf = shelfBook.shelf
              }
            })
          }
          this.setState({books: books})
        })
    } else {
      this.setState({books: []})
    }
  }
  getShelfBookById = (books, id) => {
    return books.filter(book => book.id === id)[0]
  }
  handleMove = event => {}

  render() {
    const books = this.state.books
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <Debounce time="500" handler="onChange">
              <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>
            </Debounce>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              books && books.length > 0 && books.map(b => {
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

export default SearchPage