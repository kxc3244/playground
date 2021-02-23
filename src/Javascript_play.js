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

      
     const regex = /a{2,}|b{2,}|c{2,}|d{2,}|e{2,}|f{2,}|g{2,}|h{2,}|i{2,}|j{2,}|k{2,}|l{2,}|m{2,}|n{2,}|o{2,}|p{2,}|q{2,}|r{2,}|s{2,}|t{2,}|u{2,}|v{2,}|w{2,}|x{2,}|y{2,}|z{2,}/gm;
      const str = `Three girls went to forest .Monkey said yee yaaaaaw `;
      let m;
      let k=[];

      while ((m = regex.exec(str)) !== null) {
         // This is necessary to avoid infinite loops with zero-width matches
         if (m.index === regex.lastIndex) {
            regex.lastIndex++;
         }
         
         // The result can be accessed through the `m`-variable.
         m.forEach((match, groupIndex) => {
            // console.log(`${match}`);
            k.push(match);
         });
      }

      console.log(k.join(''));



       return (
          <div>
             <h1>Hello</h1>
          </div>
       )
    
  }
  export default Javascript_play;