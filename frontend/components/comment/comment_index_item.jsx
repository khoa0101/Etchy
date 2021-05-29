import React, { useState} from 'react';
import { FaUserCircle } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import EditCommentFormContainer from './edit_comment_form_container';

const CommentIndexItem = (props) => {
  const { id, rating, body, author} = props.comment;
  const [showForm, setShowForm] = useState(false);

  return (
    <li>
      { showForm ?
        <EditCommentFormContainer comment={props.comment} closeForm={() => setShowForm(false)}/>:
      (<div className="comment-info-container">
        <div className="author-info">
          <FaUserCircle size={32} />
          <h1>{author.username}</h1>
        </div>
        <div className="comment-info">
          <ReactStars
            count={5}
            size={12.5}
            value={rating}
            edit={false}
            color={"black"}
            activeColor={"black"}
            emptyIcon={<BsStar/>}
            halfIcon={<BsStarHalf/>}
            filledIcon={<BsStarFill/>} 
          />
        <p>{body}</p>
        {author.id === props.currentUserId && (
          (
            <div className="comment-buttons">
              <button onClick={() => setShowForm(true)}>Edit</button>
              <button onClick={() => props.deleteComment(id)}>Delete</button>
            </div>
          )
        )}
        </div>
      </div>)}
    </li>
  )
}

export default CommentIndexItem;