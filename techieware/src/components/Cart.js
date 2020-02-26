/* Techieware
Author/Developer:  Vanessa Bach
WDD-469 Project & Portfolio - Full Sail University
Source:  Cart.js
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from './../actions/cartActions';

class Cart extends Component {
  // remove item
  handleRemove = id => {
    this.props.removeItem(id);
  };
  // add quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };

  // subtract quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };

  render() {
    const onCheckout = () => {};
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li className='collection-item avatar' key={item.id}>
            <img src={item.img} alt={item.img} className='circle' />
            <span className='title'>{item.title}</span>
            <p>
              <b>Price: ${item.price}</b>
              <br />
              <b>Quantity: {item.quantity}</b>
              <Link to='/Cart'>
                <i
                  className='material-icons'
                  onClick={() => {
                    this.handleAddQuantity(item.id);
                  }}
                >
                  arrow_drop_up
                </i>
              </Link>
              <Link to='/Cart'>
                <i
                  className='material-icons'
                  onClick={() => {
                    this.handleSubtractQuantity(item.id);
                  }}
                >
                  arrow_drop_down
                </i>
              </Link>
            </p>

            <button
              className='secondary-content waves-effect waves-light btn green remove'
              onClick={() => {
                this.handleRemove(item.id);
              }}
            >
              Remove
            </button>
          </li>
        );
      })
    ) : (
      <p>Sorry, your shopping cart is empty.</p>
    );
    return (
      <div className='container'>
        <div className='motoCart'>
          <h5>Current Order Status:</h5>
          <ul className='collection'>{addedItems}</ul>
        </div>
        <div>
          <p>Total items: {this.props.totalQuantity}</p>
          <h5>Total: ${this.props.total}</h5>
          <button
            className='waves-effect waves-light light-green btn'
            onClick={onCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.techieware.addedItems,
    addedItems: state.techieware.addedItems,
    total: state.techieware.total,
    totalQuantity: state.techieware.totalQuantity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
