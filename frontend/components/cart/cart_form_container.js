import { connect } from 'react-redux';
import { requestProduct } from '../../actions/product_actions'; 
import { fetchCarts, editCart, deleteCart } from '../../actions/cart_actions';
import CartForm from './cart_form';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    cartItems: state.entities.carts,
    errors: state.errors.carts
  }
};

const mDTP = (dispatch) => {
  return {
    requestProduct: (productId) => dispatch(requestProduct(productId)),
    fetchCarts: () => dispatch(fetchCarts()),
    editCart: (cart) => dispatch(editCart(cart)),
    deleteCart: (cartId) => dispatch(deleteCart(cartId))
  }
}

export default connect(mSTP, mDTP)(CartForm);