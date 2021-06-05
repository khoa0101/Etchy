import React from 'react';
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
    return (
      <div>{this.props.searchTerm}</div>
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