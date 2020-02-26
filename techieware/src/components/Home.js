/* Techieware
Author/Developer:  Vanessa Bach
WDD-469 Project & Portfolio - Full Sail University
Source:  Home.js
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from './../actions/cartActions';

class Home extends Component {
  handleClick = id => {
    this.props.addToCart(id);
    let path = `/Cart`;
    this.props.history.push(path);
  };

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className='card' key={item.id}>
          <div className='card-image'>
            <img src={item.img} alt={item.title} />
            <span
              to='/'
              className='btn-floating halfway-fab waves-effect waves-light green'
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className='material-icons'>add</i>
            </span>
          </div>

          <div className='card-content'>
            <p>{item.desc}</p>
            <p>
              <b>Price: ${item.price}</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className='container'>
        <p>&nbsp;</p>
        <div className='box'>{itemList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.techieware.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
