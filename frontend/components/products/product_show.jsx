import React from 'react';

class ProductShow extends React.Component{
  componentDidMount(){
    this.props.requestProduct(this.props.match.params.productId);
  }


  render(){
    const {name, price, discount, sales, description, quantity, imageUrl} = this.props.product;

    const quanArr = (quantity) => {
      let arr = []
      for(let i = 1; i <= quantity; i++){
        arr.push(i);
      }

      return arr;
    } 

    console.log(quantity);
    return (
      <div className="product-show">
        <div className="product-info">
          <h1>{name}</h1>
          <h2>{price}</h2>
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