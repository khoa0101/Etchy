import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';
import CreateCommentContainer from './create_comment_container';
import ReactStars from 'react-rating-stars-component';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

class CommentIndex extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
      showForm: false
    };
    this.SHOW_FORM = 'SHOW_FORM';
    this.showForm = this.showForm.bind(this);
  }

  showForm(form){
    switch(form){
      case 'SHOW_FORM':
        this.setState({showForm: !this.state.showForm})
        break
      default: null;
    }
  }

  render(){
    let comments = Object.values(this.props.comments);
    const { showForm } = this.state;
    let ratingAvg = this.props.comments.reduce((acc, comment) => 
    acc + (comment.rating), 0) / this.props.comments.length;
    console.log("ratingAvg:", ratingAvg);

    return (
      <div className="comment-container">
        <div className="comment-header">
          <h1><i className="important">{comments.length} </i>
          {comments.length < 2 ? "review" : "reviews" }</h1>
          {ratingAvg ? <ReactStars
              count={5}
              size={30}
              value={ratingAvg}
              isHalf={true}
              edit={false}
              color={"black"}
              activeColor={"black"}
              emptyIcon={<BsStar/>}
              halfIcon={<BsStarHalf/>}
              filledIcon={<BsStarFill/>} /> : null}
        </div>
        { this.props.currentUserId ?
          <div>
            {showForm ? 
                <CreateCommentContainer 
                  currentProductId={this.props.currentProductId} 
                  currentUserId={this.props.currentUserId}
                  closeForm={() => this.showForm(this.SHOW_FORM)}
                /> :
              <button className="comment-create" onClick={() => this.showForm(this.SHOW_FORM)}>Leave a Review</button>
            }
          </div>
        : null }
        <ul className="comment-list">
          {comments.map(comment => (
            <CommentIndexItemContainer 
              key={`comment-${comment.id}`} 
              comment={comment}
              showForm={this.state.showForm} 
              />
          ))}
        </ul>
      </div>
    )
  }
}

export default CommentIndex;