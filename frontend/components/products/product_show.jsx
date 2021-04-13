import React from 'react';

class ProductShow extends React.Component{
  componentDidMount(){
    this.props.requestProduct(this.props.match.params.productId);
  }

  render(){

    if (!this.props.product) {return null};

    const {name, price, discount, sales, description, quantity, imageUrl} = this.props.product;

    const quanArr = (quantity) => {
      let arr = []
      for(let i = 1; i <= quantity; i++){
        arr.push(i);
      }
      return arr;
    } 

    const originalPrice= <i className="current-price">${(price * ((100 - discount)/100)).toFixed(2)}</i>

    const discountInfo = () => {
      if (discount != 0){
        return (
          <div className="price-header">
            {originalPrice}
            <i className="original-price"> ${(price).toFixed(2)} </i>
            <i className="saving">You save ${(price * (discount/100)).toFixed(2)}</i>
            <i className="discount">({discount}% off)</i>
          </div>
        )
      }
      else {
        return <div className="price-header">{originalPrice}</div>;
      }
    }

    return (
      <div className="product-show">
        <div className="product-info">
          <h1 className="product-name">{name}</h1>
          {discountInfo()}
          <label>Quantity
            <select>
              {quanArr(quantity).map((option) => 
                <option key={`opt-${option}`}>{option}</option>
              )}
            </select>
          </label>
          <p>{description}</p>
        </div>
        <div>
          <img className="thumb-nail" src={imageUrl}/>
          <img className="display-image"src={imageUrl}/>
        </div>
      </div>
    )
  }
};

export default ProductShow;