import { connect } from 'react-redux';
import { fetchComments, createComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mSTP = (state, ownProps) => {
  return {
    comments: state.entities.comments,
    errors: state.errors.comments,
    ownProps
  }
}

const mDTP = (dispatch) => {
  return {
    fetchComments: () => dispatch(fetchComments()),
    createComment: (comment) => dispatch(createComment(comment))
  }
}

export default connect(mSTP, mDTP)(CommentIndex);