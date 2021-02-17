import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './Home/HomePage.js';
import Header from './Home/Header.js';
import SearchPage from './Search/SearchPage.js';
import DetailPage from './Details/DetailPage.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact render={(routerProps) => <HomePage {...routerProps} />} />
            <Route path="/search" exact render={(routerProps) => <SearchPage {...routerProps} />} />
            <Route path="/:pokemonName" exact component={DetailPage} />
          </Switch>
          <footer>
            All rights reserved.Pokedex Limited. 2021
        </footer>
        </Router>
      </div>
    )
  }
}


