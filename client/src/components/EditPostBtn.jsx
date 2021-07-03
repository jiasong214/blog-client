import React from 'react';
import { Link } from 'react-router-dom';
import '../style/editPostBtn.scss';

const EditPostBtn = ({id}) => {
  return (
    <aside className='editPostBtn'>
      <Link to={{ pathname: `/post/compost?id=${id}` }}>
        Edit This Post
      </Link>
    </aside>
  )
}

export default EditPostBtn;