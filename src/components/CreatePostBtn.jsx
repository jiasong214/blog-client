import React from 'react';
import { Link } from 'react-router-dom';
import '../style/createPostBtn.scss';

const CreatePostBtn = () => {
  return (
    <aside className='createPostBtn'>
      <Link to='/post/compose'>
        Create new post
      </Link>
    </aside>
  )
}

export default React.memo(CreatePostBtn);