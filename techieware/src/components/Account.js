/* Techieware
Author/Developer:  Vanessa Bach
WDD-469 Project & Portfolio - Full Sail University
Source:  components/Account.js
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser, removeAccount } from '../actions/authActions';

class Account extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
    let path = `/`;
    this.props.history.push(path);
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <h3>Welcome, {this.props.auth.user.name} </h3>
            <p>Username: {this.props.auth.user.email}</p>
            <p>ID: {this.props.auth.user.id}</p>
            <button
              className='waves-effect waves-light light-green btn'
              onClick={this.onLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Account.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  removeAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser, removeAccount })(Account);
