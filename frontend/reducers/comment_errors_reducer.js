import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENT_ERRORS } from '../actions/comment_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CARTS, RECEIVE_CART, REMOVE_CART } from '../actions/cart_actions';
import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT} from '../actions/product_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case RECEIVE_COMMENTS:
    case RECEIVE_COMMENT:
    case RECEIVE_CARTS:
    case RECEIVE_CART:
    case RECEIVE_PRODUCTS:
    case RECEIVE_PRODUCT:
    case REMOVE_CART:
    case REMOVE_COMMENT:
      return [];
    default: return state;
  }
};