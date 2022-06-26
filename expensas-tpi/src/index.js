import React from 'react';
import ReactDOM from 'react-dom/client';
import {Auth0Provider} from '@auth0/auth0-react'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider domain='dev-sdbwkr53.us.auth0.com' clientId='s4KQOEeCTi90v0xNmGjolqsHLwIBxxrb' redirectUri={window.location.origin}>
           <App />
    </Auth0Provider>
    
  
);


