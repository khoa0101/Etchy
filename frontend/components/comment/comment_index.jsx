import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';
import CreateCommentContainer from './create_comment_container';

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
    comments = comments.filter(comment => comment.product_id === this.props.currentProductId)

    return (
      <div className="comment-container">
        <h1 className="comment-header"><i className="important">{comments.length + " "}</i>
        {comments.length < 2 ? "review" : "reviews" }</h1>
        { this.props.currentUserId ?
          <div>
            {showForm ? 
                <CreateCommentContainer 
                  currentProductId={this.props.currentProductId} 
                  currentUserId={this.props.currentUserId}
                  closeForm={() => this.showForm(this.SHOW_FORM)}
                /> :
              <button onClick={() => this.showForm(this.SHOW_FORM)}>Leave a Review</button>
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