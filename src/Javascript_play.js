import ReactDOM from 'react-dom';
import React, { useState } from 'react';

function Javascript_play() {  
    
    
    // function attachString(arg1, arg2){
        //     return arg1 + arg2;
        // }
        
        const attachString=(...args) => args[0]+args[1]+args[2];
        
        console.log(attachString('Kevin','Chawla','IsGreat'));

       return (
          <div>
             <h1>Hello</h1>
          </div>
       )
    
  }
  export default Javascript_play;