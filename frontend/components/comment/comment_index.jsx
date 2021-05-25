import React from 'react';

class CommentIndex extends React.Component{
  constructor(props){
    super(props);  
  }
  
  componentDidMount(){
    this.props.fetchComments();
  }

  render(){
    const comments = Object.values(this.props.comments);
    console.log(comments);

    return (
      <div className="comment-container">
        <h1 className="comment-header"><i className="important">{comments.length}</i> reviews</h1> 
        This is comment container
      </div>
    )
  }

}

export default CommentIndex;