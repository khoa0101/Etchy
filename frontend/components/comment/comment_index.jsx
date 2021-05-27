import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';
import { BsStarFill, BsStar } from 'react-icons/bs';
import ReactStars from 'react-rating-stars-component';

class CommentIndex extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
      rating: 1,
      body: "",
      showForm: false
    };
    this.SHOW_FORM = 'SHOW_FORM';
    this.showForm = this.showForm.bind(this);
    this.createComment = this.createComment.bind(this);
    this.ratingChange = this.ratingChange.bind(this);
  }

  componentDidMount(){
    this.props.fetchComments();
  }

  showForm(form){
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

  createComment(e){
    e.preventDefault();
    this.setState({rating: this.state.rating, body: this.state.body, 
      product_id: this.props.currentProductId, author_id: this.props.currentUserId},
       () => this.props.createComment(this.state), () => this.showForm(this.SHOW_FORM));
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
    let comments = Object.values(this.props.comments);
    const { showForm } = this.state;
    comments = comments.filter(comment => comment.product_id === this.props.currentProductId)

    return (
      <div className="comment-container">
        <h1 className="comment-header"><i className="important">{comments.length + " "}</i>
        {comments.length < 2 ? "review" : "reviews" }</h1>
        { this.props.currentUserId ?
          <div>
            {showForm ? 
              (
              <div className="review-form-container">  
                <form className="review-form" onSubmit={this.createComment}>
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
                  <input type="text" value="" onChange={this.handleChange("body")}/>
                  <button>Create Review</button>
                </form>
              </div>) :
              <button onClick={() => this.showForm(this.SHOW_FORM)}>Leave a Review</button>
            }
          </div>
        : null }
        <ul className="comment-list">
          {comments.map(comment => (
            <CommentIndexItemContainer key={`comment-${comment.id}`} comment={comment}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default CommentIndex;