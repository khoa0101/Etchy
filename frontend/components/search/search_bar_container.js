import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { requestProducts } from '../../actions/product_actions';

const mSTP = (state) => ({
  products: Object.values(state.entities.products)
});

const mDTP = dispatch => ({
  fetchProducts: () => dispatch(requestProducts())
});

export default connect(mSTP, mDTP)(SearchBar);