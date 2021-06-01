import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => {
  let { product } = props;
  const originalPrice= <i className="current-price">${(product.price * ((100 - product.discount)/100)).toFixed(2)} </i>

  const discountInfo = () => {
    if (product.discount != 0){
      return (
        <div>
          {originalPrice}
          <i className="original-price">${(product.price).toFixed(2)}</i>
          <i className="discount"> ({product.discount}% off)</i>
        </div>
      )
    }
    else {
      return originalPrice;
    }
  }

  return (
    <li>
      <Link to={`/products/${product.id}`}>
        <img src={product.imageUrl}/>
        <h3>{product.name}</h3>
        {discountInfo()}
      </Link>
    </li>
  )
} 

export default ProductIndexItem;