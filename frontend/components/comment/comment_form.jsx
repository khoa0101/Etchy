import React from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';
import ReactStars from 'react-rating-stars-component';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.comment;
    this.state.showForm = this.props.showForm;
    this.FORM = 'SHOW_FORM';
    this.showForm = this.showForm.bind(this);
    this.ratingChange = this.ratingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showForm(form){
    console.log(this.state);
    switch(form){
      case 'SHOW_FORM':
        this.setState({showForm: !this.state.showForm})
        break
      default: null;
    }
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
      () => this.props.submitComment(this.state, () => this.showForm(this.FORM)));
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
      this.state.showForm && (
      <form className="review-form" onSubmit={this.handleSubmit}>
        {this.renderErrors()}
        <ReactStars
          count={5}
          size={12.5}
          onChange={this.ratingChange}
          value={1}
          color={"black"}
          activeColor={"black"}
          emptyIcon={<BsStar/>}
          filledIcon={<BsStarFill/>} 
        />
      <textarea value={this.state.body} onChange={this.handleChange("body")}/>
      <button>{this.props.formType}</button>
    </form>)
    )
  }
}

export default CommentForm;