import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcAmex,
  FaCcPaypal,
} from "react-icons/fa";


class CartForm extends React.Component{
  componentDidMount(){
    this.props.fetchCarts();
  }

  handleDelete(cartId){
    this.props.deleteCart(cartId);
  }

  handleChange(item){
    return e => {
      const target = e.target;
      const value = target.value;
      const oldItem = item;
      const newItem = {
        id: item.id,
        product_id: oldItem.product.id,
        quantity: value,
        buyer_id: oldItem.buyer.id,
      };
      this.props.editCart(newItem);
    }
  }

  handleSubmit(cart){
    cart.forEach((item) => {
      this.props.deleteCart(item.id);
    });
    this.props.openModal("CheckoutMessage");
  }

  render(){
    const { currentUser } = this.props;
    let cartItems = Object.values(this.props.cartItems);
    cartItems = cartItems.filter(item => item.buyer.id === currentUser.id);
    const itemTotal = cartItems.reduce((accumulator, cartItem) => 
      accumulator + (cartItem.product.price * cartItem.quantity), 0);
    const itemDiscount = cartItems.reduce((accumulator, cartItem) => (
      accumulator + ((cartItem.product.price * (cartItem.product.discount / 100) * cartItem.quantity))
    ), 0)

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
                <Link to={`/products/${item.product.id}`}><img src={item.imageUrl}/></Link>
                <div className="item-info">
                  <Link to={`/products/${item.product.id}`} className="item-name">{item.product.name}</Link>
                  <select defaultValue={item.quantity} onChange={this.handleChange(item)}>
                    {quanArr(item.product.quantity).map((option) => 
                      <option key={`opt-${option}`}>{option}</option>
                    )}
                  </select>
                  <div className="item-price-info">
                    <i className="item-price">${((item.product.price - (item.product.price * (item.product.discount / 100))) * item.quantity).toFixed(2)}</i>
                    {item.product.discount > 0 ? <i className="item-original-price">${(item.product.price).toFixed(2)}</i> : ""}
                    {item.quantity > 1 ? <i className="item-price-per">
                      (${(item.product.price - (item.product.price * (item.product.discount / 100))).toFixed(2)} each)</i> : ""}
                  </div>
                  <button className="remove-item" onClick={() => this.handleDelete(item.id)}>Remove</button>
                  {item.product.discount > 0 ? <i className="item-discount"><i className="important">Sale:</i> {item.product.discount}% off</i> : ""}
                </div>
              </li>
            ))}
         </ul>
         <div className="payment-container">
          <h1>How you'll pay</h1>
          <label className="payment-type" htmlFor="payment-type">
            <label htmlFor="credit">
              <input name="payment-type" id="credit" type="radio" defaultChecked/>
              <span className="radio-button"/>
              <FaCcVisa size={40} color="#1A1F71"/>
              <FaCcMastercard size={40} color="#EB001B"/>
              <FaCcDiscover size={40} color="#F9A021"/>
              <FaCcAmex size={40} color="#2671B9"/>
            </label>
            <label htmlFor="paypal">
              <input name="payment-type" id="paypal" type="radio"/>
              <span className="radio-button"/>
              <FaCcPaypal size={40} color="#0079C1"/>
            </label>
          </label>
          <div className="total-discount-container">
            <i id="og-label">Item(s) total</i>
            <i id="og-total">${itemTotal.toFixed(2)}</i>
            <i id="dis-lable">Discount</i>
            <i id="dis-total">{itemDiscount > 0 ? "-" : "" }${itemDiscount.toFixed(2)}</i>          
          </div>
          <div className="subtotal-container">
            <i id="subtotal-label"><i className="important">Subtotal</i></i>
            <i id="subtotal">${(itemTotal - itemDiscount).toFixed(2)}</i>
            <i id="shipping-label">Shipping</i><i id="shipping-total">FREE</i>
          </div>
          <button className="payment-submit" onClick={() => this.handleSubmit(cartItems)}>Proceed to checkout</button>
         </div>
       </div> 
      )
    }
  }
}

export default CartForm;