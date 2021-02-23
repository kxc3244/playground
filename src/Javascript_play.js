import React from 'react';

function Javascript_play() {  
   
     function switchCase(str){
        switch (str) {
           case 'Bad':
              console.log('Your credit score below 650');              
              break;
            
            case 'Good':
               console.log('Your credit score is between 650 to 700');
               break;
            
            case 'Excellent': 
               console.log('Your credit score is above 700');
               break;
        
           default:
              console.log('Invalid Input ');
              break;
        }
     }

     switchCase('Good');

     function calculateLetters(str){
        let count = new Map();
        for(let i=0; i < str.length; i++){
           if(!count.has(str.charAt(i))){
              count.set(str.charAt(i),0)
           }
           count.set(str.charAt(i),count.get(str.charAt(i))+1);
        }
        return count;
     }

     function capitalizeLetter(str){
      str = str.toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
      
      return str;
     }

     console.log(capitalizeLetter('this is a test scentence for task 4'));

     console.log(calculateLetters('Please'));
     
       return (
          <div>
             <h1>Hello</h1>
          </div>
       )
    
  }
  export default Javascript_play;