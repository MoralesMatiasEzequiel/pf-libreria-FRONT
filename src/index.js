import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store"
import axios from "axios"
import { Auth0Provider } from '@auth0/auth0-react';

// import 'bootstrap-icons/font/bootstrap-icons.css';


axios.defaults.baseURL = "https://server-libreria.onrender.com";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-hvcwq2kzvdk8sy6d.us.auth0.com"
    clientId="bX70VuzXC0I80rlqNQakb6FEfGK6J16X"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    audience="5f44070c474dd9f9945cb868e4a6a7a6a220c73f7e3919c4a73f1342656b3a66"
    scope="openid profile email"
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

