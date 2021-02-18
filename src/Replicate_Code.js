import ReactDOM from 'react-dom';
import React from 'react';
import kevin from './bgimage.jpg';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

function none() {
    var x = document.getElementById("div1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  function invisible() {
    var x = document.getElementById("div1");  
      x.style.visibility = "hidden";  
  }
  
class Replicate_Code extends React.Component {
    render() {
       return (
          <div>
             <div className='div1 myborder' id="div1">1</div>
              <div className='mm div2'>2</div>
              <div className='ml'>3</div>
              <div className='mxl'>4</div>
              <div className='ps'>5</div>
              <div className='pm'>6</div>
              <img src={kevin} width="100" height="150"></img>
              <div className='pl'>7</div>
              <div className='pxl'>8</div>
              <div className='ms'>9</div>
              <div className='mm'>10</div>
  
              <button onClick={none}>Display None</button>
              <button onClick={invisible}>Visibility hidden</button>
          </div>
       )
    }
  }
  export default Replicate_Code;