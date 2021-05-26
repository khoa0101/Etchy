import { connect } from 'react-redux';
import { createComment, editComment, deleteComment } from '../../actions/comment_actions';
import CommentShow from 'comment-show';

const mDTP = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    editComment: (comment) => dispatch(editComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment))
  }
}

export default connect(mDTP)(CommentShow);