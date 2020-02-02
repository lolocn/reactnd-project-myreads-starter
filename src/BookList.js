import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookContent from './BookContent.js'

class BookList extends Component {

  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      // console.log(books)
      this.setState(() => ({books: books}))
    })
  }
  render() {
    const books = this.state.books
    // console.log(books)
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <BookContent books={books}/>

        <div className="open-search">
          <Link to={{
            pathname:'/search', 
            state: {
              shelfBooks: books
            }
          }}>
            <button >Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default BookList