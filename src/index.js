import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import "../assets/style.css";
import HelloWorld from './app/app';
import { Provider } from 'react-redux';
import {store} from './Store';

ReactDOM.render(
  <Provider store={store}>
    <HelloWorld/>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();