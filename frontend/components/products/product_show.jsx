import React from 'react';

class ProductShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product_id: parseInt(this.props.match.params.productId),
      buyer_id: this.props.currentUser.id,
      quantity: 0
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
    const { currentUser } = this.props;
    const cart = Object.assign({}, this.state);
    const carts = currentUser.carts;
    let index = undefined;
    if (carts.length > 0){
      for (let i = 0; i < carts.length; i++){
        if (carts[i].product_id === cart.product_id){
          index = i;
        }
      }
    }

    if (index === undefined){
      this.props.addToCart(cart);
    } else {
      cart["quantity"] = cart.quantity + carts[index].quantity; 
      this.props.editCart(cart);
    }
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
      for(let i = 0; i <= quantity; i++){
        arr.push(i);
      }
      return arr;
    }

    let avalibility;

    if (quantity > 0) { 
      avalibility = <i className="fal fa-check"></i>  
    }

    const originalPrice = (
      <div className="price-avalibility">
        <i className="current-price">${(price * ((100 - discount)/100)).toFixed(2)} </i>
        {avalibility}
      </div>)

    const discountInfo = () => {
      if (discount != 0){
        return (
          <div className="price-header">
            {originalPrice}
            <i className="original-price"> ${(price).toFixed(2)} </i>
            <br/>
            <i className="saving">You save ${(price * (discount/100)).toFixed(2)}</i>
            <i className="discount">({discount}% off)</i>
          </div>
        )
      }
      else {
        return (
        <div className="price-header">
          {originalPrice}
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