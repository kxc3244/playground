import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, NavLink } from 'react-router-dom';
import Exercise_2 from './Exercise_2';
import Exercise_1 from './Exercise_1';
import Replicate_Code from './Replicate_Code';
import Javascript_play from './Javascript_play';
import Home from './Home.js';
import Exercise_4 from './Exercise_4';
import './bootcamp.scss';
import './App.css';
import Lottery from './components/Lottery/Lottery';
import Form from './components/Form/Form'
import RecordDetails from './components/RecordDetails/RecordDetails'
import Carousel from './components/Carousel/Carousel'
import Giphy from './components/Giphy/Giphy'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark try">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link">Home</Link></li>
            <li><NavLink to={'/exercise_1'} className="nav-link">Exercise 1</NavLink></li>
            <li><Link to={'/exercise_2'} className="nav-link">Exercise 2</Link></li>
            <li><Link to={'/replicate_code'} className="nav-link">Exercise 3</Link></li>
            <li><Link to={'/jsplayground'} className="nav-link">Cards</Link></li>
            <li><Link to={'/exercise_4'} className="nav-link">Exercise 4(Stock Layout)</Link></li> 
            <li><Link to={'/carousel'} className="nav-link">Carousel</Link></li> 
            <li><Link to={'/lottery'} className="nav-link">Lottery</Link></li> 
            <li><Link to={'/giphy'} className="nav-link">Giphy</Link></li> 
            
            <li>
            <a href="https://www.github.com/kxc3244/playground" target="_blank" className="nav-link">
              Github Front End</a></li>
            <li>
            <a href="https://www.github.com/kxc3244/reactBackEndPlayground" target="_blank" className="nav-link">
              Github Back End</a></li>
           <li> <a href="https://reaction-kevin-chawla.herokuapp.com/allrecords" target="_blank" className="nav-link">
             Back End Link</a></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path='/exercise_1' component={Exercise_1} />
              <Route path='/exercise_2' component={Exercise_2} />
              <Route path='/replicate_code' component={Replicate_Code} />
              <Route path='/jsplayground' component={Javascript_play} />
              <Route path='/exercise_4' component={Exercise_4} />
              <Route path='/lottery' component={Lottery} />
              <Route path='/form' component={Form} /> 
              <Route path="/recorddetails/:id" component={RecordDetails} />
              <Route path="/carousel" component={Carousel} />
              <Route path="/giphy" component={Giphy} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



