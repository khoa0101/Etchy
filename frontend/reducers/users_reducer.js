import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CARTS, RECEIVE_CART, REMOVE_CART } from '../actions/cart_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_CARTS:
    case RECEIVE_CART:
    case REMOVE_CART:
    case RECEIVE_CURRENT_USER:
      newState[action.currentUser.id] = action.currentUser
      return newState;
    default: return state;
  };
}

export default usersReducer;
