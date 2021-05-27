import React from 'react';
import ReactStars from 'react-rating-stars-component';
import CommentIndexContainer from '../comment/comment_index_container';

class ProductShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product_id: parseInt(this.props.match.params.productId),
      quantity: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.requestProduct(this.props.match.params.productId);
    this.props.requestComments();
  }

  handleChange(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.props.currentUserId){
      this.props.openModal("SignInMessage");
    }else{
      this.setState({ buyer_id: this.props.currentUserId }, 
        () => this.props.addToCart(this.state, () => this.props.history.push("/cart")));
    }
  }


  render(){
    if (!this.props.product) {return null};
    const { id ,name, price, discount, sales, description, quantity, imageUrl } = this.props.product;
    const { username } = this.props.product.seller;
    let comments = Object.values(this.props.comments);
    comments = comments.filter(comment => comment.product_id === id);
    let ratingAvg = comments.reduce((acc, comment) => 
      acc + (comment.rating), 0) / comments.length;

    const quanArr = (quantity) => {
      if (quantity < 1) return [];
      let arr = []
      for(let i = 1; i <= quantity; i++){
        arr.push(i);
      }
      return arr;
    }

    let avalibility, originalPrice ;

    if (quantity > 0) { 
      avalibility = <i>✓ In stock</i>  
    }

    if (discount != 0){
      originalPrice = <i className="original-price"> ${(price).toFixed(2)} </i>
    }

    const currentPrice = (
      <div className="price-availibility">
        <i className="current-price">${(price * ((100 - discount)/100)).toFixed(2)} </i>
        {originalPrice}
        {avalibility}
      </div>)

    const discountInfo = () => {
      if (discount != 0){
        return (
          <div className="price-header">
            {currentPrice}
            <br/>
            <i className="saving">You save ${(price * (discount/100)).toFixed(2)}</i>
            <i className="discount">({discount}% off)</i>
          </div>
        )
      }
      else {
        return (
        <div className="price-header">
          {currentPrice}
        </div>);
      }
    }

    return (
      <div className="product-show">
        <div className="image-info">
          <img className="thumbnail" src={imageUrl}/>
          <img className="display-image"src={imageUrl}/>
        </div>
        <div className="product-info">
          <i className="product-seller">{username}</i>
          <br/>
          <h1 className="product-name">{name}</h1>
          <i className="product-sales">{sales > 0 ? sales.toLocaleString() + " sales |" : ""} 
            {comments.length < 1 ? "No ratings yet" : 
              <ReactStars
              count={5}
              size={24}
              value={2.5}
              isHalf={true}
              edit={false}
            />}
          </i>
          {discountInfo()}
          <form onSubmit={this.handleSubmit}>
            <label>Quantity<br/>
              <select onChange={this.handleChange('quantity')}>
                {quanArr(quantity).map((option) => 
                  <option key={`opt-${option}`}>{option}</option>
                )}
              </select>
            </label>
            <button className="add-cart-button">Add to cart</button>
          </form>
          <h1 className="des-header">Description</h1>
          <p>{description}</p>
        </div>
        <CommentIndexContainer currentUserId={this.props.currentUserId} currentProductId={id}/>
      </div>
    )
  }
};

export default ProductShow;