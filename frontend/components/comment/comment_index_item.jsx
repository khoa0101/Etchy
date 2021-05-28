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
                <div className="review-form-container">
                  <div className="review-form-header">
                    <h1>Update Review!</h1>  
                  <button onClick={() => setShowForm(false)}>Close</button>
                  </div>
                  <EditCommentFormContainer comment={props.comment} showForm={showForm}/>
                </div>
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