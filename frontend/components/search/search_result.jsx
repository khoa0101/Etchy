import React from 'react';
import { connect } from 'react-redux';

class SearchResult extends React.Component {
  constructor(props){
    
  }

  render(){
    return (
      <div>This is search result!</div>
    )
  }
}

const mDTP = dispatch => ({
  fetchProducts: () => dispatch(requestProducts())
});

export default connect(mDTP)(SearchResult);