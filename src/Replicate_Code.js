import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import kevin from './bgimage.jpg';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import './replicate.css';
import './bootcamp.scss';



function Replicate_Code() {
    const [theme,setTheme] = useState('darktheme')
    
       return (
          <div>
             <div className={theme}> This is darktheme</div>
             <button onClick={()=>theme==='darktheme'?setTheme('lighttheme'):setTheme('darktheme')} className="button button1">Change Theme</button>
          </div>
       )
    
  }
  export default Replicate_Code;