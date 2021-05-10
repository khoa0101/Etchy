import { connect } from 'react-redux';
import { requestProduct } from '../../actions/product_actions'; 
import { editCart, deleteCart } from '../../actions/cart_actions';
import CartForm from './cart_form';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
};

const mDTP = (dispatch) => {
  return {
    requestProduct: (productId) => dispatch(requestProduct(productId)),
    editCart: (cart) => dispatch(editCart(cart)),
    deleteCart: (cartId) => dispatch(deleteCart(cartId))
  }
}

export default connect(mSTP, mDTP)(CartForm);