/* Techieware
Author/Developer:  Vanessa Bach
WDD-469 Project & Portfolio - Full Sail University
Source:  Login.js
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../actions/authActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/Account');
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <h3>Login</h3>
            <p>
              Don't have an account? <Link to='/Signup'>Sign Up!</Link>
            </p>
          </div>
          <form className='col s12' onSubmit={this.onSubmit}>
            <div className='row'>
              <div className='input-field col s6'>
                <input
                  id='email'
                  type='email'
                  onChange={this.onChange}
                  value={this.state.email}
                  className='validate'
                  error={errors.email}
                />
                <label htmlFor='email'>Username ex: you@mail.com</label>
                <span className=''>{errors.email}</span>
              </div>
              <div className='input-field col s6'>
                <input
                  id='password'
                  type='password'
                  onChange={this.onChange}
                  value={this.state.password}
                  className='validate'
                  error={errors.password}
                />
                <label for='password'>Password</label>
                <span className=''>{errors.password}</span>
              </div>
            </div>
            <div className='row'>
              <div className='button col s12 center-align'>
                <button
                  class='waves-effect waves-light light-green btn'
                  type='submit'
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { loginUser })(Login);
