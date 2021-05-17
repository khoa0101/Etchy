import React from 'react';

class ProductShow extends React.Component{
  constructor(props){
    super(props);
    let current = this.props.currentUser;
    let id = current ? current.id : 0 ;
    this.state = {
      product_id: parseInt(this.props.match.params.productId),
      buyer_id: id,
      quantity: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.requestProduct(this.props.match.params.productId);
  }

  handleChange(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const cart = Object.assign({}, this.state);
    this.props.addToCart(cart).then(this.props.history.push("/cart"));
    // this.props.push("/cart");
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            { error }
          </li>
        ))}
      </ul>
    )
  }


  render(){
    if (!this.props.product) {return null};
    const { name, price, discount, sales, description, quantity, imageUrl } = this.props.product;
    const { username } = this.props.product.seller;

    const quanArr = (quantity) => {
      let arr = []
      for(let i = 1; i <= quantity; i++){
        arr.push(i);
      }
      return arr;
    }

    let avalibility, originalPrice ;

    if (quantity > 0) { 
      avalibility = <i className="fal fa-check">✓ In stock</i>  
    }

    if (discount != 0){
      originalPrice = <i className="original-price"> ${(price).toFixed(2)} </i>
    }

    const currentPrice = (
      <div className="price-availibility">
        <i className="current-price">${(price * ((100 - discount)/100)).toFixed(2)} </i>
        {originalPrice}
        {avalibility}
      </div>)

    const discountInfo = () => {
      if (discount != 0){
        return (
          <div className="price-header">
            {currentPrice}
            <br/>
            <i className="saving">You save ${(price * (discount/100)).toFixed(2)}</i>
            <i className="discount">({discount}% off)</i>
          </div>
        )
      }
      else {
        return (
        <div className="price-header">
          {currentPrice}
        </div>);
      }
    }

    return (
      <div className="product-show">
        <div className="image-info">
          <img className="thumbnail" src={imageUrl}/>
          <img className="display-image"src={imageUrl}/>
        </div>
        <div className="product-info">
          {this.renderErrors()}
          <i className="product-seller">{username}</i>
          <br/>
          <i className="product-sales">{sales.toLocaleString()} sales</i>
          <h1 className="product-name">{name}</h1>
          {discountInfo()}
          <form onSubmit={this.handleSubmit}>
            <label>Quantity<br/>
              <select onChange={this.handleChange('quantity')}>
                {quanArr(quantity).map((option) => 
                  <option key={`opt-${option}`}>{option}</option>
                )}
              </select>
            </label>
            <button className="add-cart-button">Add to cart</button>
          </form>
          <h1 className="des-header">Description</h1>
          <p>{description}</p>
        </div>
        
      </div>
    )
  }
};

export default ProductShow;