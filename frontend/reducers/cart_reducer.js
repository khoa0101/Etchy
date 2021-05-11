import { RECEIVE_CART, REMOVE_CART } from '../actions/product_actions'

const cartReducers = (state = {}, action) => {
  Object.freeze(state);
  console.log(action.cart);
  let newState = Object.assign({}, state);
  switch(action.type){
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