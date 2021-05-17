import React from 'react';
import { Link } from 'react-router-dom';

class CartForm extends React.Component{
  componentDidMount(){
    this.props.fetchCarts();
  }

  render(){
    const { currentUser } = this.props;
    const cartItems = Object.values(this.props.cartItems);
    if (currentUser.carts.length === 0){
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
            {cartItems.map(item => (
              <li key={`item-${item.id}`} className="item">
                <img src={item.imgUrl}/>
                <h1 className="item-name">{item.product.name}</h1>
                <i className="item-price">{item.product.price}</i>
                <option className="item-option"></option>
                <input type=""/>
                <button className="remove-item" onClick={this.props.deleteCart(item.id)}>Remove</button>
              </li>
            ))}
         </ul>
         <div className="payment-container">
          <h1>How you'll pay</h1>
          <input type="radio"></input>
          <input type="radio"></input>
          <button className="paymentSubmit">Checkout</button>
         </div>
       </div> 
      )
    }
  }
}

export default CartForm;