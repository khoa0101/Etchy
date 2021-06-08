import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import carts from './cart_error_reducer';
import comments from './comment_errors_reducer';

export default combineReducers({
  session,
  carts,
  comments
});