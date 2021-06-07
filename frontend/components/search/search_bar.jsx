import React from 'react';
import Fuse from 'fuse.js';
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

  handleChange(e){
    this.setState({searchTerm: e.target.value}, () => this.setResult());
  }

  setResult(){
    const products = Object.values(this.props.products);
    const fuse = new Fuse(products, {
      keys: [
        'name',
        'description'
      ],
      includeScore: true,
      threshold: 0.5
    })
    const results = fuse.search(this.state.searchTerm);
    this.setState({suggestions: results.map( result => result.item)});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.history.push(`/results/${this.state.searchTerm}`);
  }

  render(){
    console.log(this.state);
    return (
    <div className="search-box">
      <form className="search-box" onSubmit={this.handleSubmit}>
        <div className="search-bar">
          <input type="text" id="search-input" placeholder="Search for anything" onChange={this.handleChange}/>
          {this.state.searchTerm.length > 0 && <input type="button" id="search-clear" onClick={this.clearInput} value="╳"/>}
        </div>
        <button className="search-button"></button>
      </form>
        { this.state.searchTerm.length  > 0 && (
          <div className="search-suggestion">
            <ul>
              {this.state.suggestions.map( product => (
                <li key={`${product.name}`}>
                  <Link to={`/products/${product. id}`}>{product.name}</Link>
                </li>
              ))}
            </ul>
          </div>)
        }
    </div>  
    )
  }
}

export default withRouter(SearchBar);