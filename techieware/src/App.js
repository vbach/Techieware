/* Techieware
Author/Developer:  Vanessa Bach
WDD-469 Project & Portfolio - Full Sail University
Source:  App.js
*/

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import { setCurrentUser, logoutUser } from './actions/authActions';
import Menu from './components/Menu';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import Cart from './components/Cart';
import Account from './components/Account';

// If token, keep user logged in
if (localStorage.jwtToken) {
  // set auth token
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  // Is token expired?
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = './login';
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Menu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Signup' component={SignUp} />
            <Route exact path='/Cart' component={Cart} />
            <Route exact path='/Account' component={Account} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
