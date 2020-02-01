import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList.jsx'
import SearchPage from './SearchPage.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

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
