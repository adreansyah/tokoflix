import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import "../assets/style.css";
import HelloWorld from './app/app';

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('app')
);

module.hot.accept();