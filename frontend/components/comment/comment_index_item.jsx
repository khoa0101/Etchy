import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

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
          <button onClick={() => props.deleteComment(id)}>Delete</button>
        )}
      </div>
    </li>
  )
}

export default CommentIndexItem;