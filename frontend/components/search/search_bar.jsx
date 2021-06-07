import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm : "",
      suggestions: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.fetchProducts();
  }

  clearInput(e){
    document.getElementById("search-input").value = "";
    this.setState({searchTerm: ""});
  }

  handleChange(){
    return e => {
      this.setState({searchTerm: `${this.state.searchTerm} + ${e.target.value[-1]}`});
      const regex = new RegExp(this.state.searchTerm, 'i');
      const products = Object.values(this.props.products);
      this.setState({ suggestions: products.filter(product => regex.test(product.name))});
      console.log(regex);
      console.log(this.state);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.history.push(`/results/${this.state.searchTerm}`);
  }

  render(){
    return (
    <div className="search-box">
      <form className="search-box" onSubmit={this.handleSubmit}>
        <div className="search-bar">
          <input type="text" id="search-input" placeholder="Search for anything" onChange={this.handleChange()}/>
          {this.state.searchTerm.length > 0 && <input type="button" id="search-clear" onClick={this.clearInput} value="╳"/>}
        </div>
        <button className="search-button"></button>
      </form>
        { this.state.searchTerm.length  > 0 && (
          <div className="search-suggestion">
            <ul>
              {this.state.suggestions.map( product => (
                <li>
                  <Link to={`/products/${product. id}`}>{product.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )
        }
    </div>  
    )
  }
}

export default withRouter(SearchBar);