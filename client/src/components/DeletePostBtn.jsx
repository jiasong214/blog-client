import React from 'react';
import '../style/deletePostBtn.scss';

const DeletePostBtn = ({id, onDelete}) => {
  return (
    <aside className='deletePostBtn' onClick={() => onDelete(id)}>
      Delete This Post
    </aside>
  )
}

export default DeletePostBtn;