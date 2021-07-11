import React from 'react';
import { Link } from 'react-router-dom';
import '../style/postSetting.scss';

const PostSetting = ({id, onDelete}) => {
  return (
    <div className="postSetting">
      <Link to={{ pathname: `/post/${id}/edit` }}>
        Edit
      </Link>
      <div className='deletePostBtn' onClick={() => onDelete(id)}>
        Delete
      </div>
    </div>
  )
}

export default PostSetting;