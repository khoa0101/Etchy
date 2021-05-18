import React from 'react';
import { Link } from 'react-router-dom';

class CartNav extends React.Component{
  constructor(props){
    super(props);

  }
  
  componentDidMount(){
    this.props.fetchCarts();
  }

  render(){
    const { currentUser } = this.props;
    let cartItems = Object.values(this.props.cartItems);
    cartItems = cartItems.filter(item => item.buyer.id === currentUser.id);

    if (! currentUser){
      return (
        <a className="shopping-cart" onClick={() => this.props.openModal("SignInMessage")}><button className="shopping-cart-button"/></a>
      )
    }
    else{ 
      return (
        <Link to="/cart" className="shopping-cart"><button className="shopping-cart-button"/></Link>
      )
    }
  }
}

export default CartNav;