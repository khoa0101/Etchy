import { connect } from 'react-redux';
import { fetchCarts } from '../../actions/cart_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import CartNav from './cart_nav';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    cartItems: state.entities.carts,
  }
};

const mDTP = (dispatch) => {
  return {
    fetchCarts: () => dispatch(fetchCarts()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(CartNav);