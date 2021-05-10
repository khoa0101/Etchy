import React from 'react';
import { Link } from 'react-router-dom';

class CartForm extends React.Component{
  render(){
    const { currentUser } = this.props;
    console.log(this.props);
    if (currentUser.carts.length === 0){
      return (
        <div className="empty_cart_page">
          <h1>
            Your cart is empty.
          </h1>
          <Link to="/">Discover something unique to fill it up.</Link>
        </div>
      )
    }
    else{ 
      return (
       <div className="cart_page">
         <ul className="item_list">
           <li>
           </li>
         </ul>
       </div> 
      )
    }
  }
}

export default CartForm;