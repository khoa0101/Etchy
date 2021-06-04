import React from 'react';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm :"",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchProducts;
  }

  handleChange(field){
    return e => {
      this.setState({[field]: e.target.value});
      filter
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.history.push("/results", this.state);
  }

  render(){
    return (
    <form className="search-box" onSubmit={this.handleSubmit}>
      <input type="text" className="search-bar" placeholder="Search for anything" onChange={this.handleChange("searchTerm")}/>
      <button className="search-button"></button>
    </form>
    )
  }
}

export default SearchBar;