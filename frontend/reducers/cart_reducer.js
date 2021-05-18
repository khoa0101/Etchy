import { RECEIVE_CARTS, RECEIVE_CART, REMOVE_CART } from '../actions/cart_actions';

const cartReducers = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_CARTS:
      return action.carts;
    case RECEIVE_CART:
      newState[action.cart.id] = action.cart;
      return newState;
    case REMOVE_CART:
      delete newState[action.cartId]
      return newState;
    default: return state;
  }
}

export default cartReducers;