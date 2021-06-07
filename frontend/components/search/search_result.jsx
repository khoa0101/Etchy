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
    this.props.requestProducts();
  }

  render(){
    const { products, searchTerm } = this.props;
    const fuse = new Fuse(products, {
      keys: [
        'name',
        'description'
      ],
      threshold: 0.5
    });
    const results = searchTerm === 'all' ? 
      Object.values(products) : fuse.search(searchTerm).map(result => result.item);
    return (
      <div>
        <h1>{results.length} results</h1>
        <ul>
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