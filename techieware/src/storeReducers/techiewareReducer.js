/* Techieware
Author/Developer:  Vanessa Bach
WDD-469 Project & Portfolio - Full Sail University
Source:  techiewareReducer.js
*/

import Item1 from './images/intel-i7.jpg';
import Item2 from './images/ASRock-Z390-Motherboard.jpg';
import Item3 from './images/TForce-Vulcan-Memory.jpg';
import Item4 from './images/EX900-SolidState.jpg';
import Item5 from './images/Seagate-Harddrive.jpg';
import Item6 from './images/MasterCase.jpg';

// Pull in action types
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY
} from './../actions/cartActionTypes';

// Put into a database and retrieve.
// Need route to get items.
const initState = {
  items: [
    {
      id: 1,
      title: 'Intel Core i7-9700k 3.6GHz 8 Core Processor',
      desc: 'Intel Core i7-9700k 3.6GHz 8 Core Processor',
      price: 359,
      img: Item1
    },
    {
      id: 2,
      title: 'ASRock Z390 Pro4 ATX LGA1151 Motherboard',
      desc: 'ASRock Z390 Pro4 ATX LGA1151 Motherboard',
      price: 88,
      img: Item2
    },
    {
      id: 3,
      title: 'Team T-FORCE VULCAN Z 16 GB (2 x 8GB) DDR4-3200 Memory',
      desc: 'Team T-FORCE VULCAN Z 16 GB (2 x 8GB) DDR4-3200 Memory',
      price: 120,
      img: Item3
    },
    {
      id: 4,
      title: 'HP EX900 500 GB M.2-2280 NVME Solid State Drive',
      desc: 'HP EX900 500 GB M.2-2280 NVME Solid State Drive',
      price: 56,
      img: Item4
    },
    {
      id: 5,
      title: "Seagate Barracuda 3 TB 3.5' 7200RPM Internal Hard Drive",
      desc: "Seagate Barracuda 3 TB 3.5' 7200RPM Internal Hard Drive",
      price: 50,
      img: Item5
    },
    {
      id: 6,
      title: 'Cooler Master MasterCase H500 ATX Mid Tower Case',
      desc: 'Cooler Master MasterCase H500 ATX Mid Tower Case',
      price: 115,
      img: Item6
    }
  ],
  addedItems: [],
  total: 0,
  totalQuantity: 0
};

const techiewareReducer = (state = initState, action) => {
  // Inside home component
  // Add to cart
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      };
    } else {
      addedItem.quantity = 1;
      // calculate total
      let newTotal = state.total + addedItem.price;
      let newQuantity = state.totalQuantity + addedItem.quantity;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
        totalQuantity: newQuantity
      };
    }
  }

  // Inside cart component
  // Remove Item
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    // calculate total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    let newQuantity = state.totalQuantity - itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
      totalQuantity: newQuantity
    };
  }

  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    let newQuantity = state.totalQuantity + 1;
    return {
      ...state,
      total: newTotal,
      totalQuantity: newQuantity
    };
  }

  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    // if qt == 0 then should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      let newQuantity = state.totalQuantity - 1;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
        totalQuantity: newQuantity
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      let newQuantity = state.totalQuantity - 1;
      return {
        ...state,
        total: newTotal,
        totalQuantity: newQuantity
      };
    }
  } else {
    return state;
  }
};

export default techiewareReducer;
