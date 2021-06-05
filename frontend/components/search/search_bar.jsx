import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm : "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.fetchProducts();
  }

  clearInput(e){
    console.log(this.state);
    document.getElementById("search-input").value = "";
    this.setState({searchTerm: ""});
    console.log(this.state);
  }

  handleChange(){
    console.log(this.state);
    return e => {
      this.setState({searchTerm: e.target.value});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.history.push(`/results/${this.state.searchTerm}`);
  }

  render(){
    return (
    <form className="search-box" onSubmit={this.handleSubmit}>
      <div className="search-bar">
        <input type="text" id="search-input" placeholder="Search for anything" onChange={this.handleChange()}/>
        {this.state.searchTerm.length > 0 && <input type="button" id="search-clear" onClick={this.clearInput} value="╳"/>}
      </div>
      <button className="search-button"></button>
    </form>
    )
  }
}

export default withRouter(SearchBar);