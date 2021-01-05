import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allRedusers from "./redux/reducers";
import thunk from 'redux-thunk';
import './index.css';
import App from './App';

const store = createStore(

  allRedusers,
  applyMiddleware(thunk)
);


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

