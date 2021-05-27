import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mSTP = (state, ownProps) => {
  return {
    comment: {
      rating: 1,
      body: ""
    },
    errors: state.errors.comments,
    formType: 'Create Review',
    ownProps
  }
}

const mDTP = (dispatch) => {
  return {
    submitComment: (comment) => dispatch(createComment(comment))
  }
}

export default connect(mSTP, mDTP)(CommentForm);