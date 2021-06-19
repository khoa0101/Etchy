import React from 'react';
import Fuse from 'fuse.js';
import ProductIndexItem from '../products/product_index_item';
import { connect } from 'react-redux';
import { requestProducts } from '../../actions/product_actions';

class SearchResult extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.scrollTo(0,0);
    this.props.requestProducts();
  }

  render(){
    const { searchTerm } = this.props;
    const products = Object.values(this.props.products);
    const fuse = new Fuse(products, {
      keys: [
        'name',
        'description'
      ],
      threshold: 0.5
    });
    const results = (searchTerm === 'all' ? 
       Object.values(products) : fuse.search(searchTerm).map(v => v.item));
    
    return (
      <div className="search-results">
        <h1>{results.length} results</h1>
        <ul className="search-results-list">
          {results.map(product =>
            <ProductIndexItem 
            key={`product-${product.id}`}
            product={product}
            />
          )}
        </ul>
      </div>
    )
  }
}
const mSTP = (state, ownProps) => {
  return {
    products: state.entities.products,
    searchTerm : ownProps.match.params.searchTerm,
  }
}

const mDTP = dispatch => ({
  requestProducts: () => dispatch(requestProducts())
});

export default connect(mSTP, mDTP)(SearchResult);