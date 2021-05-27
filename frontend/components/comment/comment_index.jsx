import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';
import ReactStars from 'react-rating-stars-component';

class CommentIndex extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
      rating: 1,
      body: "",
      product_id: this.props.currentProductId,
      showForm: false
    };
    this.SHOW_FORM = 'SHOW_FORM';
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

  handleChange(){

  }
  createComment(e){
    e.preventDefault();
    this.setState({rating: this.state.rating, body: this.state.body, 
      product_id: this.state.product_id, author_id: this.state.currentUserId}, )
  }

  render(){
    let comments = Object.values(this.props.comments);
    comments = comments.filter(comment => comment.product_id === this.props.currentProductId)

    return (
      <div className="comment-container">
        <h1 className="comment-header"><i className="important">{comments.length + " "}</i>
        {comments.length < 2 ? "review" : "reviews" }</h1>
        { this.props.currentUserId ?
          <button onClick={ () => this.showForm(this.SHOW_FORM)}>Leave a Review</button>
          
        : null} 
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