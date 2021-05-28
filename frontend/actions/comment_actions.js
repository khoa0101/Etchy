import * as CommentAPIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  }
}

const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  }
}

export const fetchComments = () => dispatch => {
  return CommentAPIUtil.fetchComments()
    .then(comments => dispatch(receiveComments(comments)),
      err => dispatch(receiveErrors(err.responseJson)))
}

export const fetchComment = (commentId) => dispatch => {
  return CommentAPIUtil.fetchComment(commentId)
    .then(comment => dispatch(receiveComment(comment)),
      err => dispatch(receiveErrors(err.responseJSON)));
}

export const createComment = (comment, reroute) => dispatch => {
  return CommentAPIUtil.createComment(comment)
    .then((comment) => { 
      dispatch(receiveComment(comment));
      reroute();
    },
      err => dispatch(receiveErrors(err.responseJSON)))
}

export const editComment = (comment, reroute) => dispatch => {
  return CommentAPIUtil.editComment(comment)
    .then(comment => {
      dispatch(receiveComment(comment))
      reroute();
    },
      err => dispatch(receiveErrors(err.responseJSON)))
}

export const deleteComment = (commentId) => dispatch => {
  return CommentAPIUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
}
