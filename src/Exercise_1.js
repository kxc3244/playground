import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


class Exercise_1 extends React.Component {
    render() {
       return (
          <div>
            <form>
            <label for="fname">First name:</label><br></br>
            <input type="text" id="fname" name="fname" maxLength="128" required></input><br></br>
            <label for="lname">Last name:</label><br></br>
            <input type="text" id="lname" name="lname" maxLength="128"></input><br></br>
            <div className="radio">
            <label for="gender">Gender: </label><br></br>
            <input type="radio" id="male" name="gender" value="male"></input>
            <label for="male">Male</label><br></br>
            <input type="radio" id="female" name="gender" value="female"></input>
            <label for="female">Female</label><br></br>
            <input type="radio" id="other" name="gender" value="other"></input>        
            <label for="other">Other</label><br></br>
            </div>
            <label for="mdegree">Master's Degree</label><br></br> 
            <select name="mdegree" id="mdegree" multiple>
              <option value="computer science">Computer Science</option>
              <option value="Electrical">Electrical</option>
              <option value="Civil">Civil</option>
            </select> <br></br>
            <label for="email">Email Address</label><br></br>
            <input type="email" name="email"></input><br></br><br></br>
            <label for="resume">Resume: </label>
            <input type="file" for="resume" multiple></input><br></br>
            <label for="date">Graduation Date</label><br></br>
            <input type="date" id="date" min="2018-01-01" max="2121-12-31"></input><br></br>
            <input type="submit" value="Submit"></input>                      
            </form> 
          </div>
       )
    }
  }
  
  export default Exercise_1;