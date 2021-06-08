import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mSTP = (state) => {
  return {
    comment: {
      rating: 1,
      body: ""
    },
    errors: state.errors.comments,
    formType: 'Create Review'
  }
}

const mDTP = (dispatch) => {
  return {
    submitComment: (comment, callback) => dispatch(createComment(comment, callback))
  }
}

export default connect(mSTP, mDTP)(CommentForm);