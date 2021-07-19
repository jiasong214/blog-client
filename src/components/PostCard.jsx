import React from 'react';
import { Link } from 'react-router-dom';
import '../style/postCard.scss';

const PostCard = ({id, title, createdAt, text }) => {

  const convertDate = (value) => {
    const converted = new Date(value);
    const year = converted.getFullYear();
    const month = converted.toLocaleString('en', { month: 'long' });;
    const date = converted.getDate();

    return `${date} ${month}, ${year}`;
  }

  const generatePreview = (text) => {
    const previewText = text.substr(0, 500);
    const trimmedText = previewText.replaceAll('#', '').replaceAll('`', '');

    return `${trimmedText}...`;
  }

  return (
    <li className="postCard">
      <Link to={{pathname: `/post/${id}`}}>
        <h3 className="postCard__title">{title}</h3>
      </Link>
      <span className="postCard__createdAt">Posted on {convertDate(createdAt)}</span>
      <div className="postCard__preview">{generatePreview(text)}</div>
      <Link to={{pathname: `/post/${id}`}}>
        <div className="postCard__readBtn">Continue Reading &rarr;</div>
      </Link>
    </li>
  )
}

export default PostCard;