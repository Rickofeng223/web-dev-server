import React from 'react';     // core library
import ReactDOM from 'react-dom';      // library for rendering into DOM element
import './index.css';
import App from './App';          // application entry point, can be called anything, but App is common
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
