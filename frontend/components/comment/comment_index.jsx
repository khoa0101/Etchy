import React from 'react';

class CommentIndex extends React.Component{  
  componentDidMount(){
    this.props.fetchComments();
  }

  render(){
    const comments = Object.values(this.props.comments);
    return (
      <div className="comment-container">
        <h1 className="comment-header"><i className="important">{comments.length}</i> reviews</h1> 
        
      </div>
    )
  }

}

export default CommentIndex;