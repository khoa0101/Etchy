import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

class CommentIndex extends React.Component{  
  componentDidMount(){
    this.props.fetchComments();
  }

  render(){
    const comments = Object.values(this.props.comments);
    return (
      <div className="comment-container">
        <h1 className="comment-header"><i className="important">{comments.length}</i> reviews</h1> 
        <ul>
          {comments.map(comment => {
            <CommentIndexItemContainer key={`comment-${comment.id}`} comment={comment}/>
          }) }
        </ul>
      </div>
    )
  }

}

export default CommentIndex;