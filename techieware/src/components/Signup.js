/* Techieware
Author/Developer:  Vanessa Bach
WDD-469 Project & Portfolio - Full Sail University
Source:  SignUp.js
*/

import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signupUser } from '../actions/authActions';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.signupUser(newUser);
    this.props.history.push('/Login');
  };

  render() {
    const { errors } = this.state;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <h3>Sign Up</h3>
            Already have an account? <Link to='/Login'>Login</Link>
            <form onSubmit={this.onSubmit}>
              <div className='row'>
                <div className='input-field col s6'>
                  <input
                    id='name'
                    type='text'
                    value={this.state.name}
                    className='validate'
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <label htmlFor='name'>Name</label>
                  <span className=''>{errors.name}</span>
                </div>
                <div className='input-field col s6'>
                  <input
                    id='email'
                    type='email'
                    value={this.state.email}
                    className='validate'
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <label htmlFor='email'>Email</label>
                  <span className=''>{errors.email}</span>
                </div>
                <div className='input-field col s6'>
                  <input
                    id='password'
                    type='password'
                    value={this.state.password}
                    className='validate'
                    onChange={this.onChange}
                  />
                  <label htmlFor='password'>Password</label>
                  <span className=''>{errors.password}</span>
                </div>
                <div className='input-field col s6'>
                  <input
                    id='password2'
                    type='password'
                    value={this.state.password2}
                    className='validate'
                    onChange={this.onChange}
                  />
                  <label htmlFor='password2'>Verify Password</label>
                  <span className='alert-warning'>{errors.password2}</span>
                </div>
              </div>
              <div className='row'>
                <div className='button col s12 center-align'>
                  <button
                    className='waves-effect waves-light light-green btn'
                    type='submit'
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { signupUser })(withRouter(Signup));
