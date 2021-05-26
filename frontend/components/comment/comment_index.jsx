import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';
import { FaUserCircle } from 'react-icons/fa'
import product_show_container from '../products/product_show_container';

class CommentIndex extends React.Component{  
  componentDidMount(){
    this.props.fetchComments();
  }

  render(){
    let comments = Object.values(this.props.comments);
    comments = comments.filter(comment => comment.product_id === this.props.currentProductId)

    return (
      <div className="comment-container">
        <h1 className="comment-header"><i className="important">{comments.length}</i> reviews</h1> 
        <ul className="comment-list">
          {comments.map(comment => {
            <CommentIndexItemContainer key={`comment-${comment.id}`} comment={comment}/>
          })}
        </ul>
      </div>
    )
  }
}

export default CommentIndex;