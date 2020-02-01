import React, { Component } from 'react'
import BookShelf from './BookShelf.jsx'

class BookContent extends Component {
  
  state = {
    currentlyReading: [],
    read: [],
    wantToRead: []
  }

  componentWillReceiveProps(nextProps){
    let books = nextProps.books
    let currentlyReadingBooks = []
    let readBooks = []
    let wantToReadBooks = []
    if (books && books.length > 0) {
      
      books.forEach(book => {
        if (book.shelf === 'currentlyReading') {
          currentlyReadingBooks.push(book)
        } else if (book.shelf === 'read') {
          readBooks.push(book)
        } else if (book.shelf === 'wantToRead') {
          wantToReadBooks.push(book)
        }
      })
    }
    this.setState({
      currentlyReading: currentlyReadingBooks,
      read: readBooks,
      wantToRead: wantToReadBooks
    })
  }
  handleMove = resp => {
    // console.log(resp)
    let books = this.props.books
    let currentlyReadingBooks = []
    let readBooks = []
    let wantToReadBooks = []
    resp.currentlyReading.forEach(e => {
      let book = this.getBookById(books, e)
      book.shelf = 'currentlyReading'
      currentlyReadingBooks.push(book)
    })
    resp.read.forEach(e => {
      let book = this.getBookById(books, e)
      book.shelf = 'read'
      readBooks.push(book)
    })
    resp.wantToRead.forEach(e => {
      let book = this.getBookById(books, e)
      book.shelf = 'wantToRead'
      wantToReadBooks.push(book)
    })
    this.setState({
      currentlyReading: currentlyReadingBooks,
      read: readBooks,
      wantToRead: wantToReadBooks
    })
  }
  getBookById = (books, id) => {
    return books.filter(book => book.id === id)[0]
  }
  render() {
    
    const {currentlyReading, read, wantToRead} = this.state
    return(
      <div className="list-books-content">
        <div>
          <BookShelf title='Currently Reading' books={currentlyReading} onMoveBook={this.handleMove}/>
          <BookShelf title='Want to Read' books={wantToRead} onMoveBook={this.handleMove}/>
          <BookShelf title='Read' books={read} onMoveBook={this.handleMove}/>
        </div>
      </div>
    )
  }
}

export default BookContent