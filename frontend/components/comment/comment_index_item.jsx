import React from 'react';
import { FaUserCircle } from 'react-icons/fa'
import StarRatingPrint from '../../util/star_print_util'

const CommentIndexItem = (props) => {
  const { rating, body, author} = props;
  return (
    <li>
      <FaUserCircle size={32} />
      {/* {StarRatingPrint(rating)} */}
      <h1>{author.username}</h1>
      <p>{body}</p>
    </li>
  )
}

export default CommentIndexItem;