import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Exercise_2 from './Exercise_2';
import Exercise_1 from './Exercise_1';
import Replicate_Code from './Replicate_Code';
import './bootcamp.scss';
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/exercise_1'} className="nav-link">Exercise 1</Link></li>
            <li><Link to={'/exercise_2'} className="nav-link">Exercise 2</Link></li>
            <li><Link to={'/replicate_code'} className="nav-link">Replicated Code</Link></li>
            <a href="https://www.github.com/kxc3244/playground" target="_blank">
            <li>Github Repository</li>
            </a>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route path='/exercise_1' component={Exercise_1} />
              <Route path='/exercise_2' component={Exercise_2} />
              <Route path='/replicate_code' component={Replicate_Code} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;



