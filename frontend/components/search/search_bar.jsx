import React, { useState } from 'react';

class SearchBar extends React.Component{
  componentDidMount(){
    this.props.fetchProducts;
  }

  render(){
    return (
    <form className="search-box">
      <input type="text" className="search-bar" placeholder="Search for anything"/>
      <button className="search-button"></button>
    </form>
    )
  }
}

export default SearchBar;