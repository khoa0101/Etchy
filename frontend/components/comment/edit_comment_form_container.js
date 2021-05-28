import React from 'react';
import { connect } from 'react-redux';
import { editComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

class EditCommentForm extends React.Component {

  render() {
    const { comment, errors, submitComment, showForm } = this.props;

    if (!comment) return null;
    return (
      <CommentForm
        comment={comment}
        errors={errors}
        formType="Edit Review"
        submitComment={submitComment}
        showForm={showForm} 
      />
    );
  }
}

const mSTP = (state) => {
  return {
    errors: state.errors.comments
  }
}

const mDTP = (dispatch) => {
  return {
    submitComment: (comment, callback) => dispatch(editComment(comment, callback)) 
  }
};

export default connect(mSTP, mDTP)(EditCommentForm);