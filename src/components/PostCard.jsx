import React from 'react';
import { Link } from 'react-router-dom';
import '../style/postCard.scss';

const PostCard = ({id, title, createdAt, subtitle }) => {

  const convertDate = (value) => {
    const converted = new Date(value);
    const year = converted.getFullYear();
    const month = converted.toLocaleString('en', { month: 'long' });;
    const date = converted.getDate();

    return `${date} ${month}, ${year}`;
  }

  return (
    <li className="postCard">
      <Link to={{pathname: `/post/${id}`}}>
        <h3 className="postCard__title">{title}</h3>
        <span className="postCard__createdAt">{convertDate(createdAt)}</span>
        <div className="postCard__subtitle">{subtitle}</div>
      </Link>
    </li>
  )
}

export default PostCard;