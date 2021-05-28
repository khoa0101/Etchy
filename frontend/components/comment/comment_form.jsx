import React from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';
import ReactStars from 'react-rating-stars-component';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.comment;
    this.ratingChange = this.ratingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  ratingChange(newRating){
    return this.setState({rating: newRating})
  }

  handleChange(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({rating: this.state.rating, body: this.state.body, 
      product_id: this.props.currentProductId, author_id: this.props.currentUserId},
      () => this.props.submitComment(this.state, () => this.props.closeForm()));
  }

  renderErrors() {
    return (
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            { error }
          </li>
        ))}
      </ul>
    )
  }

  render(){
    return(
        <div className="review-form-container">
          <div className="review-form-header">
            <h1>{this.props.formType}!</h1>  
          <button onClick={this.props.closeForm}>Close</button>
        </div>
        <form className="review-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <ReactStars
            count={5}
            size={12.5}
            onChange={this.ratingChange}
            value={this.state.rating}
            color={"black"}
            activeColor={"black"}
            emptyIcon={<BsStar/>}
            filledIcon={<BsStarFill/>} 
          />
        <textarea value={this.state.body} onChange={this.handleChange("body")}/>
        <button>{this.props.formType}</button>
        </form>
      </div>
      )
  }
}

export default CommentForm;