import { connect } from 'react-redux';
import { requestProduct } from '../../actions/product_actions'; 
import { addToCart } from '../../actions/cart_actions';
import { openModal } from '../../actions/modal_actions';
import ProductShow from './product_show';
import { fetchComments } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
  return {
    product: state.entities.products[ownProps.match.params.productId],
    comments: Object.values(state.entities.comments).filter(comment => comment.product_id === +ownProps.match.params.productId),
    currentUserId: state.session.id,
    errors: state.errors.carts
  }
};

const mDTP = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)), 
    requestProduct: (productId) => dispatch(requestProduct(productId)),
    requestComments: () => dispatch(fetchComments()),
    addToCart: (cart, reroute) => dispatch(addToCart(cart, reroute))
  }
}

export default connect(mSTP, mDTP)(ProductShow);