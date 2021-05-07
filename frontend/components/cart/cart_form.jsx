import React from 'react';

class CartForm extends React.Component{
  render(){
    const { currentUser } = this.props;
    console.log(this.props);
    if (currentUser.carts.length === 0){
      return (
        <div className="cart_page">
          <h1>
            Your cart is empty.
          </h1>
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