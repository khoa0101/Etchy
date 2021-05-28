import React from 'react';
import { connect } from 'react-redux';
import { editComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

class EditCommentForm extends React.Component {

  render() {
    const { comment, submitEvent, showForm } = this.props;

    if (!comment) return null;
    return (
      <CommentForm
        comment={comment}
        formType="Edit Review"
        submitEvent={submitEvent}
        showForm={showForm} 
      />
    );
  }
}

const mDTP = (dispatch) => {
  return {
    submitComment: (comment) => dispatch(editComment(comment)) 
  }
};

export default connect(null, mDTP)(EditCommentForm);