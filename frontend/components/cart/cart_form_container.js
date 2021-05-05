import { connect } from 'react-redux';

import { requestProduct } from '../../actions/product_actions'; 
import { addToCart, editCart, deleteCart } from '../../actions/cart_actions';
import CartForm from './cart_form';

const mSTP = (state, ownProps) => {
  return {
    products: state.entities.products[ownProps.match.params.productId],
  }
};

const mDTP = (dispatch) => {
  return {
    requestProducts: (productId) => dispatch(requestProduct(productId)),
    addToCart: (cart) => dispatch(addToCart(cart)),
    editCart: (cart) => dispatch(editCart(cart)),
    deleteCart: (cartId) => dispatch(deleteCart(cartId))
  }
}

export default connect(mSTP)(mDTP)(CartForm);