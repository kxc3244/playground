import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    
<Auth0Provider
domain={process.env.REACT_APP_AUTH_DOMAIN}
clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
redirectUri={window.location.origin}
>
<BrowserRouter >
<App />
</BrowserRouter> 
</Auth0Provider>

,document.getElementById('root'));


