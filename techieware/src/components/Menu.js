/* Techieware
Author/Developer:  Vanessa Bach
WDD-469 Project & Portfolio - Full Sail University
Source:  Menu.js
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Menu extends Component {
  render() {
    return (
      <nav className='nav-wrapper grey darken-4'>
        <div className='container'>
          <Link to='/'>
            <img
              src='technical-support.png'
              className='brand-logo'
              alt='Welcome'
            ></img>
          </Link>
          <Link to='/' className='brand-title'>
            Techieware
          </Link>

          <ul className='right'>
            <li>
              <Link to='/'>
                <i className='material-icons'>home</i>
              </Link>
            </li>
            <li>
              <Link to='/Cart'>
                <i className='material-icons'>shopping_cart</i>
              </Link>
              <ul>
                <li>
                  <span className='badge red'>{this.props.totalQuantity}</span>
                </li>
              </ul>
            </li>

            <li>
              {this.props.auth.isAuthenticated ? (
                <Link to='/Account'>
                  <i className='material-icons'>account_circle</i>
                </Link>
              ) : (
                <Link to='/Login'>
                  <i className='material-icons'>account_circle</i>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    totalQuantity: state.techieware.totalQuantity,
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Menu);
