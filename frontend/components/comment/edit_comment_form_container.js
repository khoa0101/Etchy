import React from 'react';
import { connect } from 'react-redux';
import { requestComment, updateEvent } from '../../actions/comment_actions';
import CommentForm from './comment_form';

class EditCommentForm extends React.Component {

  componentDidMount(){
    this.props.fetchComment(this.props.comment.id)
  }

  render () {
    const { comment, formType, submitEvent } = this.props;

    if (!comment) return null;
    return (
      <CommentForm
        comment={comment}
        formType={formType}
        submitEvent={submitEvent} />
    );
  }
}

const mDTP = (dispatch) => {
  return {
    requestComment: (commentId) => dispatch(requestComment(commentId)),
    submitComment: (comment) => dispatch(updateEvent(comment)) 
  }
};

export default connect(mDTP)(EditCommentForm);