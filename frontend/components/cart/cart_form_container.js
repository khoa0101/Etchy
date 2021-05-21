import { connect } from 'react-redux';
import { fetchCarts, editCart, deleteCart } from '../../actions/cart_actions';
import { openModal } from '../../actions/modal_actions';
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
    fetchCarts: () => dispatch(fetchCarts()),
    openModal: (modal) => dispatch(openModal(modal)), 
    editCart: (cart) => dispatch(editCart(cart)),
    deleteCart: (cartId) => dispatch(deleteCart(cartId))
  }
}

export default connect(mSTP, mDTP)(CartForm);