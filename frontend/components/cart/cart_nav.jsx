import React from 'react';
import { Link } from 'react-router-dom';

class CartNav extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchCarts();
  }

  render(){
    const { currentUser } = this.props;

    if (! currentUser){
      return (
        <a className="shopping-cart" onClick={() => this.props.openModal("SignInMessage")}><button className="shopping-cart-button"/></a>
      )
    }
    else{ 
      let cartItems = Object.values(this.props.cartItems);
      cartItems = cartItems.filter(item => item.buyer.id === currentUser.id);
      let count = cartItems.length;
      return (
        <Link to="/cart" className="shopping-cart">
          <button className="shopping-cart-button">
            {count > 0 ? <span className="items-in-cart">{count}</span> : ""}
          </button>
        </Link>
      )
    }
  }
}

export default CartNav;