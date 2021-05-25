export const fetchComments = () => (
  $.ajax({
    url: '/api/comments'
  })
)

export const createComment = (comment) => (
  $.ajax({
    url: '/api/comments',
    method: 'POST',
    data: { comment }
  })
)

export const editComment = (comment) => {
  return $.ajax({
    url: `/api/comments/${comment.id}`,
    method: 'PATCH',
    data: { cart }
  })
}

export const deleteComment = (commentId) => (
  $.ajax({
    url: `/api/comments/${commentId}`,
    method: 'DELETE'
  })
)