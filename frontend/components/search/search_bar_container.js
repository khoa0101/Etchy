import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { requestProducts } from '../../actions/product_actions';

const mDTP = dispatch => ({
  fetchProducts: () => dispatch(requestProducts())
});

export default connect(null, mDTP)(SearchBar);