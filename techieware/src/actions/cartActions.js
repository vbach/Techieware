/* Techieware
Author/Developer:  Vanessa Bach
WDD-469 Project & Portfolio - Full Sail University
Source:  actions/cartActions.js
*/

import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY
} from './cartActionTypes';

// Add to cart
export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};

// Remove from cart
export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};

// Subtract quantity
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  };
};

// Add quantity
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  };
};
