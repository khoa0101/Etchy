import { connect } from 'react-redux';
import { editComment, deleteComment } from '../../actions/comment_actions';
import CommentIndexItem from './comment_index_item';

const mSTP = (state) => {
  return {
    currentUserId: state.session.id
  }
}

const mDTP = (dispatch) => {
  return {
    editComment: (comment) => dispatch(editComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment))
  }
}

export default connect(mSTP, mDTP)(CommentIndexItem);