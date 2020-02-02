import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList.js'
import SearchPage from './SearchPage.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path='/search' component={SearchPage}>
            </Route>
            <Route path='/' component={BookList}>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default BooksApp
