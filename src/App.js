import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MoviesList from './components/MoviesList/MoviesList';
import MovieDetail from './components/MovieDetail/MovieDetail';

const App = () => (
  <Router basename={'/react-tests'}>
    <div className="App">
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={MoviesList} />
        <Route path={`${process.env.PUBLIC_URL}/:id`} component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;
