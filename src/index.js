import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from "./view/LoginPage/LoginPage";

ReactDOM.render(
  <React.StrictMode>
    <LoginPage/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
