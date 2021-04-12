import { connect } from 'react-redux';

import { requestProducts } from '../../actions/product_actions';
import Splash from './spash';

const mSTP = (state) => {
  return {
    products: state.entities.products,
  }
};

const mDTP = dispatch => {
  return {
    requestProducts: () => dispatch(requestProducts()),
  }
};

export default connect(mSTP, mDTP)(Splash);