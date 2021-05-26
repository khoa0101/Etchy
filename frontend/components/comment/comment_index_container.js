import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mSTP = (state, ownProps) => {
  return {
    comments: state.entities.comments,
    ownProps
  }
}

const mDTP = (dispatch) => {
  return {
    fetchComments: () => dispatch(fetchComments())
  }
}

export default connect(mSTP, mDTP)(CommentIndex);