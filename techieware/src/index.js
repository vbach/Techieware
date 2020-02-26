/* Techieware
Author/Developer:  Vanessa Bach
WDD-469 Project & Portfolio - Full Sail University
Source:  index.js
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';

// // Create an instance of "createStore" and pass our reducer parameter
// const techiewareStore = createStore(rootReducer);

// Render - Use Provider to connect store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
