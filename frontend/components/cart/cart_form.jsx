import React from 'react';
import { Link } from 'react-router-dom';

class CartForm extends React.Component{
  constructor(props){
    super(props);

  }
  
  componentDidMount(){
    this.props.fetchCarts();
  }

  subtotal(){
    
  }

  handleDelete(cartId){
    this.props.deleteCart(cartId);
  }

  handleChange(field){

  }

  render(){
    const { currentUser } = this.props;
    let cartItems = Object.values(this.props.cartItems);
    cartItems = cartItems.filter(item => item.buyer.id === currentUser.id);
    
    const quanArr = (quantity) => {
      let arr = []
      for(let i = 1; i <= quantity; i++){
        arr.push(i);
      }
      return arr;
    }

    if (cartItems.length === 0){
      return (
        <div className="empty_cart_page">
          <h1>Your cart is empty.</h1>
          <Link to="/">Discover something unique to fill it up.</Link>
        </div>
      )
    }
    else{ 
      return (
       <div className="cart_page">
         <ul className="item_list">
            <h1 className="cart-header">{cartItems.length} {cartItems.length > 1 ? "items" : "item"} in cart.</h1>
            {cartItems.map(item => (
              <li key={`item-${item.id}`} className="item">
                <img src={item.imageUrl}/>
                <h1 className="item-name">{item.product.name}</h1>
                <i className="item-price">{(item.product.price).toFixed(2)}</i>
                <select defaultalue={item.quantity} onChange={this.handleChange('quantity')}>
                  {quanArr(item.product.quantity).map((option) => 
                    <option key={`opt-${option}`}>{option}</option>
                  )}
                </select>
                <button className="remove-item" onClick={() => this.handleDelete(item.id)}>Remove</button>
              </li>
            ))}
         </ul>
         <div className="payment-container">
          <h1>How you'll pay</h1>
          <input type="radio"></input>
          <input type="radio"></input>
          <input type="radio"></input>
          <button className="paymentSubmit">Proceed to checkout</button>
         </div>
       </div> 
      )
    }
  }
}

export default CartForm;