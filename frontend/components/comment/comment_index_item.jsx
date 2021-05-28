import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import EditCommentFormContainer from './edit_comment_form_container';

const CommentIndexItem = (props) => {
  const { id, body, author} = props.comment;
  return (
    <li>
      <div className="author-info">
        <FaUserCircle size={32} />
        <h1>{author.username}</h1>
      </div>
      <div className="comment-info">
        <p>{body}</p>
        {author.id === props.currentUserId && (
          (
            <div>
              <EditCommentFormContainer 
                comment={props.comment}
                showForm={props.showForm}
              /> 
              <button onClick={() => props.deleteComment(id)}>Delete</button>
            </div>
          )
        )}
      </div>
    </li>
  )
}

export default CommentIndexItem;