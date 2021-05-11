import { connect } from 'react-redux';
import { requestProduct } from '../../actions/product_actions'; 
import { addToCart, editCart } from '../../actions/cart_actions';
import ProductShow from './product_show';

const mSTP = (state, ownProps) => {
  return {
    product: state.entities.products[ownProps.match.params.productId],
    currentUser: state.entities.users[state.session.id]
  }
};

const mDTP = (dispatch) => {
  return {
    requestProduct: (productId) => dispatch(requestProduct(productId)),
    addToCart: (cart) => dispatch(addToCart(cart)),
    editCart: (cart) => dispatch(editCart(cart))
  }
}

export default connect(mSTP, mDTP)(ProductShow);