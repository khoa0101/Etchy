import { connect } from 'react-redux';

import { requestProduct } from '../../actions/product_actions'; 
import ProductShow from './product_show';

const mSTP = (state, ownProps) => {
  return {
    product: state.entities.products[ownProps.match.params.productId]
  }
};

const mDTP = (dispatch) => {
  return {
    requestProduct: (productId) => dispatch(requestProduct(productId)),
  }
}

export default connect(mSTP, mDTP)(ProductShow);