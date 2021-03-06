import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import CommentIndexItem from './comment_index_item';

const mSTP = (state) => {
  return {
    currentUserId: state.session.id
  }
}

const mDTP = (dispatch) => {
  return {
    deleteComment: (comment) => dispatch(deleteComment(comment))
  }
}

export default connect(mSTP, mDTP)(CommentIndexItem);