import React from 'react';
import './home.scss'



function Home() {
       return (
         //  <div >
         //     <h1>Welcome to my Application.</h1> 
         //     <h2>Please choose your desired option from the NavBar</h2>
         //  </div>

         <div class="jumbotron">
            <h1 class="display-4">Hello Bootcamp Folks</h1>
            <p class="lead">Please choose the content from the above navigation bar.</p>
            <hr class="my-4"></hr>
            <p>If anything doesn't work or you wish to contact me just to chat please click the button below</p>
            <p class="lead">
               <a class="btn btn-primary btn-lg" href="mailto:kevinchawla1999@gmail.com" role="button">Email me</a>
            </p>
         </div>
       )
    
  }
  export default Home;