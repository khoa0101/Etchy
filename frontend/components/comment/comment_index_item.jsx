import React, { useState} from 'react';
import { FaUserCircle } from 'react-icons/fa';
import EditCommentFormContainer from './edit_comment_form_container';

const CommentIndexItem = (props) => {
  const { id, body, author} = props.comment;
  const [showForm, setShowForm] = useState(false);

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
            <div className="comment-buttons">
              { showForm ?
                  <EditCommentFormContainer comment={props.comment} closeForm={() => setShowForm(false)}/>
                : <button onClick={() => setShowForm(true)}>Edit</button>
              }
              <button onClick={() => props.deleteComment(id)}>Delete</button>
            </div>
          )
        )}
      </div>
    </li>
  )
}

export default CommentIndexItem;